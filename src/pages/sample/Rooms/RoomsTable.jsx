import {Button, Image, Popconfirm, Space, Table, Tag} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import {useNavigate} from "react-router-dom";

const RoomsTable = ({data,deleteHandle}) => {
    const dispatch=useDispatch()
    const navigate =useNavigate()
    const Delete = async (id) => {
        deleteHandle('/rooms',id)
    };


    const Edit = (id) => {
        localStorage.setItem('editDataId',id)
        dispatch({type:EDIT_DATA,payload:id})
        navigate('/rooms/add')
    };

    const columns = [
        {
            title: 'Title Ru',
            dataIndex: 'title_ru',
            id: 'title_ru',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Размер комнаты',
            dataIndex: 'room_size',
            id: 'room_size',
            render: (text) => <Tag>{text}</Tag>,
        },
        {
            title: 'Человеческий потенциал',
            dataIndex: 'capacity',
            id: 'capacity',
            render: (text) => <Tag>{text}</Tag>,
        },
        {
            title: 'Количество балконов',
            dataIndex: 'num_balconies',
            id: 'num_balconies',
            render: (text) => <Tag>{text}</Tag>,
        },
        {
            title: 'Количество ванных комнат',
            dataIndex: 'num_bathrooms',
            id: 'num_bathrooms',
            render: (text) => <Tag>{text}</Tag>,
        },
        {
            title: 'Image',
            dataIndex: 'images',
            id: 'images',
            render: (image) => {
                return (
                    <Image
                        width={50}
                        src={image[0]?.image}
                    />
                )
            },
        },
        {
            title: 'Action',
            id: 'action',
            render: (_, record) => (
                <Space size={20}>
                    <Button
                        onClick={() => Edit(record.slug)}
                        type='primary'
                        icon={<EditOutlined />}>
                        Edit
                    </Button>
                    <Popconfirm
                        title={'Are you sure to delete this task?'}
                        description={'Delete the task '}
                        onConfirm={() => Delete(record.slug)}>
                        <Button type='danger' icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                rowKey={(record) => record.id}
            />
        </div>
    );
};

RoomsTable.propTypes={
    data:PropTypes.array,
    deleteHandle:PropTypes.func
}

export default RoomsTable;