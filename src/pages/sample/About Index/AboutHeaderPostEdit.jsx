import React, {useEffect,  useState} from 'react';
import {Button, Col, Form,  message,  Row,  Upload} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import ImgCrop from "antd-img-crop";
import FormInput from "../../../@crema/core/Form/FormInput";
import FormTextArea from "../../../@crema/core/Form/FormTextArea";

const initialValueForm = {
    image_1:[],
    image_2:[],
    title_ru:"",
    title_uz:"",
    title_en:"",
    sub_title_ru:"",
    sub_title_uz:"",
    sub_title_en:"",
};




const AboutHeaderPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()

    const [fileListProps1, setFileListProps1] = useState([])
    const [fileListProps2, setFileListProps2] = useState([])





    // query-about-index
    const {
        mutate: postAboutIndexMutate,
        data: postAboutIndex,
        isLoading: postAboutIndexLoading,
        isSuccess: postAboutIndexSuccess,
    } = useMutation(({url, data}) => apiService.postData(url, data), {
        onSuccess: () => {

            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });

    // query-edit
    const {
        isLoading: editAboutIndexLoading,
        data: editAboutIndexData,
        refetch: editAboutIndexRefetch,
        isSuccess: editAboutIndexSuccess,
    } = useQuery(["edit-about-index", editId], () => apiService.getDataByID("/pages/about/index", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putAboutIndex,
        isLoading: putAboutIndexLoading,
        data: putData,
        isSuccess: putAboutIndexSuccess
    } = useMutation(({
                         url,
                         data,
                         id
                     }) => apiService.editData(url, data, id), {
        onSuccess: () => {
            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });

    // about-index success
    useEffect(() => {
        if (putAboutIndexSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postAboutIndexSuccess || putAboutIndexSuccess) {

            navigate('/about-index')
        }
    }, [postAboutIndex, putData])


    // if edit contact
    useEffect(() => {
        if (editId !== "") {
            editAboutIndexRefetch();
        }
    }, [editId]);

    // if no edit about-index
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit about-index
    useEffect(() => {
        if (editAboutIndexSuccess) {

            const image_1=[{
                uid: editAboutIndexData.id,
                name: editAboutIndexData.id,
                status: "done",
                url: editAboutIndexData.image_1
            }];

            const image_2=[{
                uid: editAboutIndexData.id,
                name: editAboutIndexData.id,
                status: "done",
                url: editAboutIndexData.image_2
            }];


            const edit = {
                image_1,
                image_2,
                title_ru:editAboutIndexData.title_ru,
                title_uz:editAboutIndexData.title_uz,
                title_en:editAboutIndexData.title_en,
                sub_title_ru:editAboutIndexData.sub_title_ru,
                sub_title_uz:editAboutIndexData.sub_title_uz,
                sub_title_en:editAboutIndexData.sub_title_en,
            }


            setFileListProps1(image_1)
            setFileListProps2(image_2)
            form.setFieldsValue(edit)
        }

    }, [editAboutIndexData])


    const onFinish = (values) => {


        const formData = new FormData();

        formData.append('title_ru', values.title_ru);
        formData.append('title_uz', values.title_uz);
        formData.append('title_en', values.title_en);
        formData.append('sub_title_ru', values.sub_title_ru);
        formData.append('sub_title_uz', values.sub_title_uz);
        formData.append('sub_title_en', values.sub_title_en);

        if (fileListProps1[0]?.originFileObj) {
            formData.append('image_1', fileListProps1[0]?.originFileObj);
        }

        if (fileListProps2[0]?.originFileObj) {
            formData.append('image_2', fileListProps2[0]?.originFileObj);
        }


        if (editAboutIndexData) {
            putAboutIndex({url: '/pages/about/index', data: formData, id: editId})
        } else {
            postAboutIndexMutate({url: "/pages/about/index/", data: formData});
        }


    }
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };




    // refresh page again get data

    useEffect(() => {
        const storedValues = JSON.parse(localStorage.getItem('myFormValues'));
        if (storedValues) {
            storedValues.images = []
            form.setFieldsValue(storedValues);
        }

        const handleBeforeUnload = () => {

            localStorage.setItem(
                'myFormValues',
                JSON.stringify(form.getFieldsValue()),
            );
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            localStorage.removeItem('editDataId')
            localStorage.removeItem('myFormValues')
            window.removeEventListener('beforeunload', handleBeforeUnload);
        }
    }, []);


    // image
    const onChangeImage_1 = ({fileList: newFileList}) => {
        setFileListProps1(newFileList);
        form.setFieldsValue({image_1: newFileList});
    };

    const onChangeImage_2 = ({fileList: newFileList}) => {
        setFileListProps2(newFileList);
        form.setFieldsValue({image_2: newFileList});
    };




    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };



    return (
        <div>
            {(postAboutIndexLoading || editAboutIndexLoading || putAboutIndexLoading) ?
                <AppLoader/> :
                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 24
                    }}
                    wrapperCol={{
                        span: 24
                    }}
                    style={{
                        maxWidth: "100%"
                    }}
                    initialValues={initialValueForm}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Row gutter={20}>
                        <Col span={8}>
                            <FormInput
                                required={true}
                                required_text={'Необходимо ввести заголовок'}
                                label={'Title Ru'}
                                name={'title_ru'}
                            />

                        </Col>
                        <Col span={8}>
                            <FormInput
                                required={true}
                                required_text={'Sarlavha kiritish kerak'}
                                label={'Title Uz'}
                                name={'title_uz'}
                            />

                        </Col>
                        <Col span={8}>
                            <FormInput
                                required={true}
                                required_text={'A title must be entered'}
                                label={'Title En'}
                                name={'title_en'}
                            />

                        </Col>
                    </Row>
                    <Row gutter={20}>

                        <Col span={24}>
                            <FormTextArea
                                required={true}
                                required_text={'Требуется дополнительный заголовок'}
                                label={'Подзаголовок Ru'}
                                name={'sub_title_ru'}
                            />

                        </Col>
                        <Col span={24}>
                            <FormTextArea
                                required={true}
                                required_text={'Qo\'shimcha sarlavha talab qilinadi'}
                                label={'Qo\'shimcha Sarlavha Uz'}
                                name={'sub_title_uz'}
                            />


                        </Col>
                        <Col span={24}>
                            <FormTextArea
                                required={true}
                                required_text={'An additional title is required'}
                                label={'Sub Title En'}
                                name={'sub_title_en'}
                            />

                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label='Изображение'
                                name={'image_1'}
                                rules={[{required: true, message: 'Требуется изображение.'}]}>
                                <ImgCrop rotationSlider>
                                    <Upload
                                        maxCount={1}
                                        fileList={fileListProps1}
                                        listType='picture-card'
                                        onChange={onChangeImage_1}
                                        onPreview={onPreview}
                                        beforeUpload={() => false}
                                    >
                                        {fileListProps1.length > 0 ? "" : "Upload"}
                                    </Upload>
                                </ImgCrop>
                            </Form.Item>
                        </Col>

                    </Row>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label='Изображение баннера'
                                name={'image_2'}
                                rules={[{required: true, message: 'Требуется изображение баннера.'}]}>
                                <ImgCrop rotationSlider>
                                    <Upload
                                        maxCount={1}
                                        fileList={fileListProps2}
                                        listType='picture-card'
                                        onChange={onChangeImage_2}
                                        onPreview={onPreview}
                                        beforeUpload={() => false}
                                    >
                                        {fileListProps2.length > 0 ? "" : "Upload"}
                                    </Upload>
                                </ImgCrop>
                            </Form.Item>
                        </Col>

                    </Row>





                    <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                        {
                            editAboutIndexSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default AboutHeaderPostEdit;