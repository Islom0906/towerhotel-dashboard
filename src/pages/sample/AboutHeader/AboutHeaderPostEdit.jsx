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

const initialValueForm = {
    image:[],
    title_ru:"",
    title_uz:"",
    title_en:"",
};




const AboutHeaderPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()

    const [fileListProps, setFileListProps] = useState([])





    // query-about-header
    const {
        mutate: postAboutHeaderMutate,
        data: postAboutHeader,
        isLoading: postAboutHeaderLoading,
        isSuccess: postAboutHeaderSuccess,
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
        isLoading: editAboutHeaderLoading,
        data: editAboutHeaderData,
        refetch: editAboutHeaderRefetch,
        isSuccess: editAboutHeaderSuccess,
    } = useQuery(["edit-about-header", editId], () => apiService.getDataByID("/pages/about/header", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putAboutHeader,
        isLoading: putAboutHeaderLoading,
        data: putData,
        isSuccess: putAboutHeaderSuccess
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

    // about-header success
    useEffect(() => {
        if (putAboutHeaderSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postAboutHeaderSuccess || putAboutHeaderSuccess) {

            navigate('/about-header')
        }
    }, [postAboutHeader, putData])


    // if edit contact
    useEffect(() => {
        if (editId !== "") {
            editAboutHeaderRefetch();
        }
    }, [editId]);

    // if no edit about-header
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit about-header
    useEffect(() => {
        if (editAboutHeaderSuccess) {

            const image=[{
                uid: editAboutHeaderData.id,
                name: editAboutHeaderData.id,
                status: "done",
                url: editAboutHeaderData.image
            }];


            const edit = {
                image,
                title_ru:editAboutHeaderData.title_ru,
                title_uz:editAboutHeaderData.title_uz,
                title_en:editAboutHeaderData.title_en,
            }


            console.log(edit)
            setFileListProps(image)
            form.setFieldsValue(edit)
        }

    }, [editAboutHeaderData])


    const onFinish = (values) => {


        const formData = new FormData();

        formData.append('title_ru', values.title_ru);
        formData.append('title_uz', values.title_uz);
        formData.append('title_en', values.title_en);

        if (fileListProps[0]?.originFileObj) {
            formData.append('image', fileListProps[0]?.originFileObj);
        }


        if (editAboutHeaderData) {
            putAboutHeader({url: '/pages/about/header', data: formData, id: editId})
        } else {
            postAboutHeaderMutate({url: "/pages/about/header/", data: formData});
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
    const onChangeImage = ({fileList: newFileList}) => {
        setFileListProps(newFileList);
        form.setFieldsValue({image: newFileList});
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
            {(postAboutHeaderLoading || editAboutHeaderLoading || putAboutHeaderLoading) ?
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
                        <Col span={12}>
                            <Form.Item
                                label='Изображение баннера'
                                name={'image'}
                                rules={[{required: true, message: 'Требуется изображение баннера.'}]}>
                                <ImgCrop rotationSlider>
                                    <Upload
                                        maxCount={1}
                                        fileList={fileListProps}
                                        listType='picture-card'
                                        onChange={onChangeImage}
                                        onPreview={onPreview}
                                        beforeUpload={() => false}
                                    >
                                        {fileListProps.length > 0 ? "" : "Upload"}
                                    </Upload>
                                </ImgCrop>
                            </Form.Item>
                        </Col>

                    </Row>






                    <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                        {
                            editAboutHeaderSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default AboutHeaderPostEdit;