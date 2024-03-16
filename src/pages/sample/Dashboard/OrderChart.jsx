import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,ResponsiveContainer} from 'recharts';
import { useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {message,Typography } from 'antd';
import { useMemo } from 'react';
const { Title } = Typography;



const DealersChart = () => {
  const {data,isError,isLoading} = useQuery(
      'order-get',
      () => apiService.getData('/order-list'),
      {
        onError: (error) => {

          message.error(error);
        },
      },
  );
  const dataOrder = useMemo(() => {
    if (isLoading || isError) {
      return []; // Return an empty array or handle error state
    }

    const dataMap = new Map();


    data?.forEach((entry) => {
      const createdAtDate = new Date(entry?.created_at).toLocaleDateString();
      if (dataMap?.has(createdAtDate)) {
        dataMap?.set(createdAtDate, dataMap.get(createdAtDate) + 1);
      } else {
        dataMap?.set(createdAtDate, 1);
      }
    });

    const result = [];

    for (const [date, count] of dataMap) {
      result.push({ date, count });
    }
    return result.reverse();
  }, [data, isLoading, isError]);

  return (
      <div>
        <Title type='h2'>Статистика заказов</Title>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart  data={dataOrder}>
            <CartesianGrid strokeDasharray="3 6" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
  )
}

export default DealersChart