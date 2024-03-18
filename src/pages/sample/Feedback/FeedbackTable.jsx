import {Button, Col, Form, message, Modal, Row, Select, Space, Table, Tag} from "antd";
import {EditOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";
import {AppLoader} from "../../../@crema";
import {useEffect, useMemo, useState} from "react";
import apiService from "../../../@crema/services/apis/api";
import {useMutation} from "react-query";

const initialValueForm = {
    title_uz: "",
    title_ru: "",
    sub_category: [],
};

const FeedbackTable = ({data, refetch}) => {
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editId, setEditId] = useState(null)

    const {
        mutate: editStatusMutate,
        data: editStatus,
        isLoading: editStatusLoading,
        isSuccess: editStatusSuccess,
    } = useMutation(({url, data, id}) => apiService.editDataPatch(url, data, id), {
        onSuccess: () => {

            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });

    const Edit = (id) => {
        setIsModalOpen(true)
        setEditId(id)
    };


    const onFinish = (values) => {
        editStatusMutate({url: "/pages/feedback", data: values, id: editId});
    }
    const handleOk = () => {
        form
            .validateFields()
            .then((values) => {
                onFinish(values);
            })
            .catch((errorInfo) => {
                console.log('Failed:', errorInfo);
            });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (editStatusSuccess) {
            setIsModalOpen(false)
            form.setFieldsValue(initialValueForm)
            refetch()
        }
    }, [editStatus]);

    const optionsStatus = useMemo(() => {

        return [
            {
                value: 'APPROVED',
                label: 'Approved',
            },
            {
                value: 'REJECTED',
                label: 'Rejected',
            },

        ]
    }, []);


    const columns = [
        {
            title: 'Customer\'s full name',
            dataIndex: 'fullname',
            id: 'fullname',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            id: 'title',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Customer\'s country',
            dataIndex: 'country',
            id: 'country',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Customer\'s phone',
            dataIndex: 'phone',
            id: 'phone',
            render: (text) => <Tag>{text}</Tag>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            id: 'status',
            render: (text) => <Tag
                color={text === "NEW" ? '#108ee9' : text === "APPROVED" ? "#87d068" : "#f50"}>{text}</Tag>,
        },
        {
            title: 'Action',
            id: 'action',
            render: (_, record) => (
                <Space size={20}>
                    <Button
                        onClick={() => Edit(record.id)}
                        type='primary'
                        icon={<EditOutlined/>}>
                        Edit Status
                    </Button>

                </Space>
            ),
        },
    ];

    return (
        <div>
            <Modal title="Изменить статус" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {(editStatusLoading) ?
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
                        autoComplete="off"
                    >
                        <Row gutter={20}>
                            <Col span={24}>
                                <Form.Item
                                    label={'Выберите статус'}
                                    name={'status'}
                                    rules={[{
                                        required: true, message: 'Статус должны быть выбраны'
                                    }]}
                                    wrapperCol={{
                                        span: 24,
                                    }}
                                >
                                    <Select
                                        style={{
                                            width: '100%',
                                        }}
                                        placeholder='Выберите одну статус'
                                        optionLabelProp='label'
                                        options={optionsStatus}
                                    />
                                </Form.Item>

                            </Col>
                        </Row>


                    </Form>
                }
            </Modal>
            <Table
                columns={columns}
                expandable={{
                    expandedRowRender: (record) => (
                        <p
                            style={{
                                margin: 10,
                            }}
                        >
                            {record.description}
                        </p>
                    ),
                }}
                dataSource={data}
                rowKey={(record) => record.id}
            />
        </div>
    );
};

FeedbackTable.propTypes = {
    data: PropTypes.array,
    refetch: PropTypes.func
}

export default FeedbackTable;