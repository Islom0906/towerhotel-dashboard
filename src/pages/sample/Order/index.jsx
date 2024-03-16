import {Tag, Table,message,Spin} from 'antd';
import apiService from "../../../@crema/services/apis/api";
import { useQuery} from "react-query";

const columns = [
  {
    title: 'Имя',
    dataIndex: 'first_name',
    key: 'first_name',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Фамилия',
    dataIndex: 'last_name',
    key: 'last_name',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Телефон',
    dataIndex: 'phone',
    key: 'phone',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Электронная почта',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Размер комнаты',
    dataIndex: 'room_type',
    key: 'room_type',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Количество номеров',
    dataIndex: 'rooms_count',
    key: 'rooms_count',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Взрослые считаются',
    dataIndex: 'adults_count',
    key: 'adults_count',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Дети считают',
    dataIndex: 'children_count',
    key: 'children_count',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Дата заезда',
    dataIndex: 'check_in_date',
    key: 'check_in_date',
    render: (text) => <Tag>{text}</Tag>,
  },
  {
    title: 'Проверить дату',
    dataIndex: 'check_out_date',
    key: 'check_out_date',
    render: (text) => <Tag>{text}</Tag>,
  },
];



const Orders = () => {
  const {data, isLoading} = useQuery(
      'order-get',
      () => apiService.getData('/reservations'),
      {
        // enabled:false,
        onError: (error) => {
          const err=[]
          for (const property in error?.response?.data?.errors){
            err.push(error?.response?.data?.errors[property])

          }
          message.error(err[0][0]);
        },
      },
  );


  return (
      <div>
        <Spin size='medium' spinning={isLoading}>
          <Table
              columns={columns}
              dataSource={data?.results}
              rowKey={(record) => record?.id}
          />
        </Spin>
      </div>
  );
};

export default Orders;