import React, {useEffect, useState} from 'react';
import {Button, Col, Form, message, Row, Upload} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import ImgCrop from "antd-img-crop";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import FormInput from "../../../@crema/core/Form/FormInput";
import FormTextArea from "../../../@crema/core/Form/FormTextArea";



const initialValueForm = {
    main_image_id:[],
    image_ids: [],
    title_uz: "",
    title_ru: "",
    title_en: "",
    description_ru: "",
    description_uz: "",
    description_en: "",

};


const NewsPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListProps, setFileListProps] = useState([]);
    const [fileListPropsMain, setFileListPropsMain] = useState([])
    const [isUpload, setIsUpload] = useState('');




    // query-image
    const {
        mutate: imagesUploadMutate,
        data: imagesUpload,
        isLoading: imagesUploadLoading,
        isSuccess: imagesUploadSuccess,
    } = useMutation(({url, formData}) => apiService.postData(url, formData), {

        onSuccess: () => {

            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });


    // query-news
    const {
        mutate: postNewsMutate,
        data: postNews,
        isLoading: postNewsLoading,
        isSuccess: postNewsSuccess,

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
        isLoading: editNewsLoading,
        data: editNewsData,
        refetch: editNewsRefetch,
        isSuccess: editNewsSuccess,

    } = useQuery(["edit-news", editId], () => apiService.getDataByID("/pages/news", editId), {
        enabled: false
    });


    // put-query
    const {
        mutate: putNewsPage,
        isLoading: putNewsPageLoading,
        data: putData,
        isSuccess: putNewsPageSuccess
    } = useMutation(({
                         url, data, id
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

    // delete image

    const {mutate: imagesDeleteMutate} = useMutation(({url, ids}) => apiService.deleteImages(url, ids), {
        onSuccess: () => message.success('Success'),
        onError: (error) => message.error(error.message)
    });

    //                                              =====useEffect====

    // news success
    useEffect(() => {
        if (putNewsPageSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }
        if (postNewsSuccess || putNewsPageSuccess) {
            navigate('/news')
        }
    }, [postNews, putData])

    // if edit news
    useEffect(() => {
        if (editId !== "") {
            editNewsRefetch();
        }
    }, [editId]);

    // if no edit news
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit news
    useEffect(() => {
        const image_ids = [];
        let main_image_id=null
        if (editNewsData !== undefined) {
            editNewsData.images.map(image => {
                const data = {
                    uid: image.id,
                    name: image.id,
                    status: "done",
                    url: image.image
                }
                image_ids.push(data)
            })

            main_image_id = [{
                uid: editNewsData?.main_image.id,
                name: editNewsData?.main_image.id,
                status: "done",
                url: editNewsData?.main_image.image
            }]

        }

        if (editNewsSuccess) {

            const edit = {
                title_uz: editNewsData?.title_uz,
                title_ru: editNewsData?.title_ru,
                title_en: editNewsData?.title_en,
                description_ru: editNewsData?.description_ru,
                description_uz: editNewsData?.description_uz,
                description_en: editNewsData?.description_en,
                image_ids,
                main_image_id
            }


            setFileListProps(image_ids);
            setFileListPropsMain(main_image_id)
            form.setFieldsValue(edit)
        }

    }, [editNewsData])
    const onFinish = (values) => {
        const image_ids = []

        fileListProps.map(image => {
            image_ids.push(image.uid)
        })

        const data = {
            image_ids,
            main_image_id:fileListPropsMain[0]?.uid,
            title_uz: values.title_uz,
            title_ru: values.title_ru,
            title_en: values.title_en,
            description_ru: values.description_ru,
            description_uz: values.description_uz,
            description_en: values.description_en,
        };
        if (editNewsSuccess) {

            putNewsPage({url: "/pages/news", data, id: editId});
        } else {
            postNewsMutate({url: "/pages/news/", data});
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

            localStorage.setItem('myFormValues', JSON.stringify(form.getFieldsValue()),);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            localStorage.removeItem('editDataId')
            localStorage.removeItem('myFormValues')
            window.removeEventListener('beforeunload', handleBeforeUnload);
        }
    }, []);

    // image
    useEffect(() => {
        // images
        if (imagesUploadSuccess&&isUpload==='images') {
            const initialImage = [...fileListProps]
            const uploadImg = {
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }
            initialImage.push(uploadImg)
            form.setFieldsValue({image_ids: [uploadImg]});
            setFileListProps(initialImage);
            setIsUpload("")
        }
         // main image
        if (imagesUploadSuccess&& isUpload==="mainImage") {
            const uploadImg = [{
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }]
            form.setFieldsValue({main_image_id: uploadImg});
            setFileListPropsMain(uploadImg);
            setIsUpload("")
        }
    }, [imagesUpload]);

    const onChangeImage = ({fileList: newFileList}) => {
        if (newFileList.length < fileListProps.length) {
            return
        }
        const formData = new FormData();
        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[newFileList.length - 1].originFileObj);
            imagesUploadMutate({url: "/images/", formData});
            setIsUpload("images")
        }

    };



    const handleRemoveImage = (file) => {
        const withoutDeleteImage = []

        fileListProps.map((image) => {
            if (image?.uid !== file?.uid) {
                withoutDeleteImage.push(image)
            }
        })
        if (!withoutDeleteImage.length > 0) {
            form.setFieldsValue({image_ids: []});
        }
        const ids = {
            image_ids: [file?.uid]
        }
        imagesDeleteMutate({url: "/images/delete", ids});
        setFileListProps(withoutDeleteImage)


    }

    // main image
    const onChangeMainImage = ({fileList: newFileList}) => {
        const formData = new FormData();
        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[0].originFileObj);
            imagesUploadMutate({url: "/images/", formData});
            setIsUpload("mainImage")
        }

    };

    const handleRemoveMainImage = (file) => {
        const ids = {
            image_ids: [file?.uid]
        }
        imagesDeleteMutate({url: "/images/delete", ids});
        setFileListPropsMain([])
        form.setFieldsValue({main_image_id: []});

    }

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








    return (<div>
        {(postNewsLoading || editNewsLoading || putNewsPageLoading || imagesUploadLoading) ? <AppLoader/> :
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

                    <Col span={24}>
                        <FormInput
                            required={true}
                            required_text={'Необходимо ввести заголовок'}
                            label={'Заголовок Ru'}
                            name={'title_ru'}
                        />

                    </Col>
                    <Col span={24}>
                        <FormInput
                            required={true}
                            required_text={'Sarlavha kiritish kerak'}
                            label={'Sarlavha Uz'}
                            name={'title_uz'}
                        />


                    </Col>
                    <Col span={24}>
                        <FormInput
                            required={true}
                            required_text={'A title is required'}
                            label={'Title En'}
                            name={'title_en'}
                        />

                    </Col>
                </Row>
                <Row gutter={20}>

                    <Col span={24}>
                        <FormTextArea
                            required={true}
                            required_text={'Требуется описание'}
                            label={'Описание Ru'}
                            name={'description_ru'}
                        />

                    </Col>
                    <Col span={24}>
                        <FormTextArea
                            required={true}
                            required_text={'Tavsif kiritish kerak'}
                            label={'Tavsif Uz'}
                            name={'description_uz'}
                        />


                    </Col>
                    <Col span={24}>
                        <FormTextArea
                            required={true}
                            required_text={'A description is required'}
                            label={'Description En'}
                            name={'description_en'}
                        />

                    </Col>
                </Row>

                <Row gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            label='Основные фотографии'
                            name={'main_image_id'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={1}
                                    fileList={fileListPropsMain}
                                    listType='picture-card'
                                    onChange={onChangeMainImage}
                                    onPreview={onPreview}
                                    onRemove={handleRemoveMainImage}
                                    beforeUpload={() => false}
                                >
                                    {fileListPropsMain.length > 0 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label='Изображение'
                            name={'image_ids'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={5}
                                    fileList={fileListProps}
                                    listType='picture-card'
                                    onChange={onChangeImage}
                                    onPreview={onPreview}
                                    onRemove={handleRemoveImage}
                                    beforeUpload={() => false}
                                >
                                    {fileListProps.length > 4 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>

                </Row>





                <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                    {editNewsSuccess ? 'Изменить продукт' : 'Создать продукт'}
                </Button>
            </Form>}
    </div>);
};

export default NewsPostEdit;