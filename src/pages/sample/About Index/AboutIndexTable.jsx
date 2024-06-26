import {Button, Image, Space, Table} from "antd";
import { EditOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import {useNavigate} from "react-router-dom";

const ContactTable = ({data}) => {
    const dispatch=useDispatch()
    const navigate =useNavigate()


    // const [reverseData,setReverseData]=useState([])

    const Edit = (id) => {
        localStorage.setItem('editDataId',id)
        dispatch({type:EDIT_DATA,payload:id})
        navigate('/about-index/add')
    };

    // useEffect(()=>{
    //     const reverse=data?.reverse()
    //     setReverseData(reverse)
    // },[data])
    const columns = [
        {
            title: 'Title Ru',
            dataIndex: 'title_ru',
            id: 'title_ru',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Sub Title Ru',
            dataIndex: 'sub_title_ru',
            id: 'sub_title_ru',
            render: (text) => <p>{text}</p>,
        },

        {
            title: 'Image',
            dataIndex: 'image_1',
            id: 'image_1',
            render: (image) => {
                return (
                    <Image
                        width={50}

                        src={image}
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
                        onClick={() => Edit(record.id)}
                        type='primary'
                        icon={<EditOutlined />}>
                        Edit
                    </Button>

                </Space>
            ),
        },
    ];

    return (
        <div>
            {
                data[0] &&
                <Table
                    columns={columns}
                    dataSource={data}
                    rowKey={(record) => record?.id}
                />
            }
        </div>
    );
};

ContactTable.propTypes={
    data:PropTypes.array,
    deleteHandle:PropTypes.func
}

export default ContactTable;