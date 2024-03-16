import React, {useEffect, useMemo, useState} from 'react';
import {Button, Col, Form, message, Row, Upload, Typography, Select} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import ImgCrop from "antd-img-crop";
import {MinusCircleOutlined} from "@ant-design/icons";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import FormInput from "../../../@crema/core/Form/FormInput";
import FormInputNumber from "../../../@crema/core/Form/FormInputNumber";

const {Title} = Typography


const initialValueForm = {
    image: [],
    title_uz: "",
    title_ru: "",
    title_en: "",
    landmarks: [
        {
            distance: "",
            distance_type: "",
            title_uz: "",
            title_ru: "",
            title_en: "",
        }
    ],

};


const LandmarkPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListProps, setFileListProps] = useState([]);






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


    // query-landmark
    const {
        mutate: postLandmarkMutate,
        data: postLandmark,
        isLoading: postLandmarkLoading,
        isSuccess: postLandmarkSuccess,

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
        isLoading: editLandmarkLoading,
        data: editLandmarkData,
        refetch: editLandmarkRefetch,
        isSuccess: editLandmarkSuccess,

    } = useQuery(["edit-landmark", editId], () => apiService.getDataByID("/landmarkcategories", editId), {
        enabled: false
    });


    // put-query
    const {
        mutate: putLandmark,
        isLoading: putLandmarkLoading,
        data: putData,
        isSuccess: putLandmarkSuccess
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

    // landmark success
    useEffect(() => {
        if (putLandmarkSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }
        if (postLandmarkSuccess || putLandmarkSuccess) {
            navigate('/landmark')
        }
    }, [postLandmark, putData])

    // if edit landmark
    useEffect(() => {
        if (editId !== "") {
            editLandmarkRefetch();
        }
    }, [editId]);

    // if no edit landmark
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit landmark
    useEffect(() => {
        let image=null
        if (editLandmarkData !== undefined) {
                image = [{
                    uid: editLandmarkData?.image.id,
                    name: editLandmarkData?.image.id,
                    status: "done",
                    url: editLandmarkData?.image.image
                }]

        }

        if (editLandmarkSuccess) {

            const edit = {
                title_uz: editLandmarkData?.title_uz,
                title_ru: editLandmarkData?.title_ru,
                title_en: editLandmarkData?.title_en,
                image:editLandmarkData?.image?.id,
                landmarks: editLandmarkData?.landmarks,
            }


            setFileListProps(image);
            form.setFieldsValue(edit)
        }

    }, [editLandmarkData])
    const onFinish = (values) => {
        const data = {
            image:fileListProps[0]?.uid,
            title_uz: values.title_uz,
            title_ru: values.title_ru,
            title_en: values.title_en,
            landmarks: values?.landmarks,

        };
        console.log(data)
        if (editLandmarkSuccess) {
            putLandmark({url: "/landmarkcategories", data, id: editId});
        } else {
            postLandmarkMutate({url: "/landmarkcategories/", data});
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
        if (imagesUploadSuccess) {
            const uploadImg = [{
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }]
            form.setFieldsValue({image: uploadImg});
            setFileListProps(uploadImg);
        }
    }, [imagesUpload]);

    const onChangeImage = ({fileList: newFileList}) => {
        const formData = new FormData();
        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[0].originFileObj);
            imagesUploadMutate({url: "/images/", formData});
        }

    };

    const handleRemoveImage = (file) => {
        // const withoutDeleteImage = []
        //
        // fileListProps.map((image) => {
        //     if (image?.uid !== file?.uid) {
        //         withoutDeleteImage.push(image)
        //     }
        // })
        // if (!withoutDeleteImage.length > 0) {
        // }
        const ids = {
            image_ids: [file?.uid]
        }
        imagesDeleteMutate({url: "/images/delete", ids});
        setFileListProps([])
        form.setFieldsValue({image: []});

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



    // selection
    const optionDistance = useMemo(() => {
        return [
            {
                value: 'km',
                label: 'Км',
            },
            {
                value: 'm',
                label: 'М',
            },
        ]
    }, []);




    return (<div>
        {(postLandmarkLoading || editLandmarkLoading || putLandmarkLoading || imagesUploadLoading) ? <AppLoader/> :
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
                            label={'Заголовок Ru'}
                            name={'title_ru'}
                        />

                    </Col>
                    <Col span={8}>
                        <FormInput
                            required={true}
                            required_text={'Sarlavha kiritish kerak'}
                            label={'Sarlavha Uz'}
                            name={'title_uz'}
                        />


                    </Col>
                    <Col span={8}>
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
                            name={'image'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={1}
                                    fileList={fileListProps}
                                    listType='picture-card'
                                    onChange={onChangeImage}
                                    onPreview={onPreview}
                                    onRemove={handleRemoveImage}
                                    beforeUpload={() => false}
                                >
                                    {fileListProps.length > 0 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                </Row>
                <Title level={3}>Ориентиры поблизости</Title>
                <Form.List name="landmarks">
                    {(fields, {add, remove}) => (
                        <>
                            {fields.map((field, index) => {
                                return (
                                    <div key={field.fieldKey} style={{marginBottom: 20}}>
                                        <Row gutter={20}>

                                            <Col span={8}>
                                                <FormInput
                                                    required={true}
                                                    required_text={'Укажите название местоположения.'}
                                                    label={`Название местоположения Ru ${index + 1}`}
                                                    name={[field.name, 'title_ru']}
                                                />
                                            </Col>
                                            <Col span={8}>
                                                <FormInput
                                                    required={true}
                                                    required_text={'Joylashuv nomi kiritish talab qilinadi'}
                                                    label={`Joylashuv nomi Uz ${index + 1}`}
                                                    name={[field.name, 'title_uz']}
                                                />
                                            </Col>
                                            <Col span={8}>
                                                <FormInput
                                                    required={true}
                                                    required_text={'A location name is required'}
                                                    label={`Location name En ${index + 1}`}
                                                    name={[field.name, 'title_en']}
                                                />
                                            </Col>
                                            <Col span={12}>
                                                <FormInputNumber
                                                    required={true}
                                                    required_text={'Требуется интервал'}
                                                    label={`Расстояние между ${index + 1}`}
                                                    name={[field.name, 'distance']}
                                                />
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label={'Единица расстояния'}
                                                    name={[field.name,'distance_type']}
                                                    rules={[{
                                                        required: true, message: 'Вы должны выбрать'
                                                    }]}
                                                    wrapperCol={{
                                                        span: 24,
                                                    }}
                                                >
                                                    <Select
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                        placeholder='Выберите единицу измерения расстояния'
                                                        optionLabelProp='label'
                                                        options={optionDistance}
                                                    />
                                                </Form.Item>

                                            </Col>
                                        </Row>
                                        <MinusCircleOutlined onClick={() => remove(field.name)}/>
                                    </div>

                                );
                            })}
                            <Form.Item>
                                <Button type="primary" onClick={() => add()} block
                                        style={{backgroundColor: '#28a745'}}>
                                    Открыть новый раздел для характеристика
                                </Button>
                            </Form.Item>

                        </>
                    )}
                </Form.List>




                <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                    {editLandmarkSuccess ? 'Изменить продукт' : 'Создать продукт'}
                </Button>
            </Form>}
    </div>);
};

export default LandmarkPostEdit;