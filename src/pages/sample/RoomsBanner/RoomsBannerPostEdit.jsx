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
    header_image:[],
    title_ru:"",
    title_uz:"",
    title_en:"",
};




const RoomsBannerPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()

    const [fileListProps, setFileListProps] = useState([])





    // query-rooms-banner
    const {
        mutate: postRoomsBannerMutate,
        data: postRoomsBanner,
        isLoading: postRoomsBannerLoading,
        isSuccess: postRoomsBannerSuccess,
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
        isLoading: editRoomsBannerLoading,
        data: editRoomsBannerData,
        refetch: editRoomsBannerRefetch,
        isSuccess: editRoomsBannerSuccess,
    } = useQuery(["edit-rooms-banner", editId], () => apiService.getDataByID("/roompage", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putRoomsBanner,
        isLoading: putRoomsBannerLoading,
        data: putData,
        isSuccess: putRoomsBannerSuccess
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

    // rooms-banner success
    useEffect(() => {
        if (putRoomsBannerSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postRoomsBannerSuccess || putRoomsBannerSuccess) {

            navigate('/rooms-banner')
        }
    }, [postRoomsBanner, putData])


    // if edit contact
    useEffect(() => {
        if (editId !== "") {
            editRoomsBannerRefetch();
        }
    }, [editId]);

    // if no edit rooms-bannerr
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit rooms-banner
    useEffect(() => {
        if (editRoomsBannerSuccess) {

            const header_image=[{
                uid: editRoomsBannerData.id,
                name: editRoomsBannerData.id,
                status: "done",
                url: editRoomsBannerData.header_image
            }];


            const edit = {
                header_image,
                title_ru:editRoomsBannerData.title_ru,
                title_uz:editRoomsBannerData.title_uz,
                title_en:editRoomsBannerData.title_en,
            }


            setFileListProps(header_image)
            form.setFieldsValue(edit)
        }

    }, [editRoomsBannerData])


    const onFinish = (values) => {


        const formData = new FormData();

        formData.append('title_ru', values.title_ru);
        formData.append('title_uz', values.title_uz);
        formData.append('title_en', values.title_en);

        if (fileListProps[0]?.originFileObj) {
            formData.append('header_image', fileListProps[0]?.originFileObj);
        }


        if (editRoomsBannerData) {
            putRoomsBanner({url: '/roompage', data: formData, id: editId})
        } else {
            postRoomsBannerMutate({url: "/roompage/", data: formData});
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
        form.setFieldsValue({header_image: newFileList});
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
            {(postRoomsBannerLoading || editRoomsBannerLoading || putRoomsBannerLoading) ?
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
                                name={'header_image'}
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
                            editRoomsBannerSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default RoomsBannerPostEdit;