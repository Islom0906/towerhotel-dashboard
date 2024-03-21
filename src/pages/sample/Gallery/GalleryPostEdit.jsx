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



const initialValueForm = {
    header_image_id:[],
    image_ids: [],
    title_uz: "",
    title_ru: "",
    title_en: "",

};


const GalleryPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListProps, setFileListProps] = useState([]);
    const [fileListPropsHeader, setFileListPropsHeaderImage] = useState([])
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


    // query-gallery
    const {
        mutate: postGalleryMutate,
        data: postGallery,
        isLoading: postGalleryLoading,
        isSuccess: postGallerySuccess,

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
        isLoading: editGalleryLoading,
        data: editGalleryData,
        refetch: editGalleryRefetch,
        isSuccess: editGallerySuccess,

    } = useQuery(["edit-gallery", editId], () => apiService.getDataByID("/pages/gallery", editId), {
        enabled: false
    });


    // put-query
    const {
        mutate: putGalleryPage,
        isLoading: putGalleryPageLoading,
        data: putData,
        isSuccess: putGalleryPageSuccess
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

    // gallery success
    useEffect(() => {
        if (putGalleryPageSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }
        if (postGallerySuccess || putGalleryPageSuccess) {
            navigate('/gallery')
        }
    }, [postGallery, putData])

    // if edit gallery
    useEffect(() => {
        if (editId !== "") {
            editGalleryRefetch();
        }
    }, [editId]);

    // if no edit gallery
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit gallery
    useEffect(() => {
        const image_ids = [];
        let header_image_id=null
        if (editGalleryData !== undefined) {
            editGalleryData.images.map(image => {
                const data = {
                    uid: image.id,
                    name: image.id,
                    status: "done",
                    url: image.image
                }
                image_ids.push(data)
            })

            header_image_id = [{
                uid: editGalleryData?.header_image.id,
                name: editGalleryData?.header_image.id,
                status: "done",
                url: editGalleryData?.header_image.image
            }]

        }

        if (editGallerySuccess) {

            const edit = {
                title_uz: editGalleryData?.title_uz,
                title_ru: editGalleryData?.title_ru,
                title_en: editGalleryData?.title_en,
                image_ids,
                header_image_id
            }


            setFileListProps(image_ids);
            setFileListPropsHeaderImage(header_image_id)
            form.setFieldsValue(edit)
        }

    }, [editGalleryData])
    const onFinish = (values) => {
        const image_ids = []

        fileListProps.map(image => {
            image_ids.push(image.uid)
        })

        const data = {
            image_ids,
            header_image_id:fileListPropsHeader[0]?.uid,
            title_uz: values.title_uz,
            title_ru: values.title_ru,
            title_en: values.title_en,
        };
        if (editGallerySuccess) {

            putGalleryPage({url: "/pages/gallery", data, id: editId});
        } else {
            postGalleryMutate({url: "/pages/gallery/", data});
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
         // header image
        if (imagesUploadSuccess&& isUpload==="headerImage") {
            const uploadImg = [{
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }]
            form.setFieldsValue({header_image_id: uploadImg});
            setFileListPropsHeaderImage(uploadImg);
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

    // header image
    const onChangeHeaderImage = ({fileList: newFileList}) => {
        const formData = new FormData();
        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[0].originFileObj);
            imagesUploadMutate({url: "/images/", formData});
            setIsUpload("headerImage")
        }

    };

    const handleRemoveHeaderImage = (file) => {
        const ids = {
            image_ids: [file?.uid]
        }
        imagesDeleteMutate({url: "/images/delete", ids});
        setFileListPropsHeaderImage([])
        form.setFieldsValue({header_image_id: []});

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
        {(postGalleryLoading || editGalleryLoading || putGalleryPageLoading || imagesUploadLoading) ? <AppLoader/> :
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
                    <Col span={12}>
                        <Form.Item
                            label='Изображение'
                            name={'image_ids'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={10}
                                    fileList={fileListProps}
                                    listType='picture-card'
                                    onChange={onChangeImage}
                                    onPreview={onPreview}
                                    onRemove={handleRemoveImage}
                                    beforeUpload={() => false}
                                >
                                    {fileListProps.length > 9 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label='Заглавное изображение'
                            name={'header_image_id'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={1}
                                    fileList={fileListPropsHeader}
                                    listType='picture-card'
                                    onChange={onChangeHeaderImage}
                                    onPreview={onPreview}
                                    onRemove={handleRemoveHeaderImage}
                                    beforeUpload={() => false}
                                >
                                    {fileListPropsHeader.length > 0 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                </Row>





                <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                    {editGallerySuccess ? 'Изменить' : 'Создать'}
                </Button>
            </Form>}
    </div>);
};

export default GalleryPostEdit;