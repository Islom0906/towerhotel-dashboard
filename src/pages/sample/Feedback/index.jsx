import React, {useEffect, useMemo, useState} from 'react';
import {Col, message, Row, Select, Space, Spin} from 'antd';
import apiService from '../../../@crema/services/apis/api';
import {useQuery} from 'react-query';
import FeedbackTable from "./FeedbackTable";

const Index = () => {
    const [filterStatus, setFilterStatus] = useState("")


    const {
        data,
        isLoading: getLoading,
        refetch
    } = useQuery('feedback-get', () => apiService.getData(`/pages/feedback/${filterStatus ? `?status=${filterStatus}` : ""}`), {
        // enabled:false,
        onError: (error) => {

            message.error(error);
            // Handle the error
        },
    });


    useEffect(() => {
        refetch()
    }, [filterStatus]);

    const onChangeFilterStatus = (data) => {
        setFilterStatus(data)
    }


    const optionsStatusFilter = useMemo(() => {

        return [
            {
                value: '',
                label: 'All',
            },
            {
                value: 'NEW',
                label: 'New',
            },
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


    return (
        <div className={'site-space-compact-wrapper'}>
            <Space direction={'vertical'} style={{width: '100%'}}>
                <Row gutter={20}>

                    <Col offset={16} span={8}>
                        <Select
                            style={{
                                width: '100%',
                            }}
                            placeholder='Фильтровать по статусу'
                            optionLabelProp='label'
                            onChange={onChangeFilterStatus}
                            options={optionsStatusFilter}
                        />
                    </Col>
                </Row>
                <Spin
                    size='medium'
                    spinning={getLoading}>
                    <FeedbackTable
                        data={data}
                        refetch={refetch}
                    />
                </Spin>
            </Space>
        </div>
    );
};

export default Index;
