import {Button, Col, message, Row, Space, Spin} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';
import apiService from '../../../@crema/services/apis/api';
import { useQuery} from 'react-query';
import {EDIT_DATA} from '../../../shared/constants/ActionTypes';
import {useDispatch} from 'react-redux';
import AboutIndexTable from "./AboutIndexTable";

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data,
    isLoading: getLoading,
  } = useQuery('about-index-get', () => apiService.getData('/pages/about/index/'), {
    // enabled:false,
    onError: (error) => {

      message.error(error);
      // Handle the error
    },
  });





  const addArticle = () => {
    dispatch({type: EDIT_DATA, payload: ''});
    navigate('/about-index/add');
  };


  return (
      <div className={'site-space-compact-wrapper'}>
        <Space direction={'vertical'} style={{width: '100%'}}>
          <Row gutter={20}>

            <Col span={8} offset={16}>
              <Button
                  disabled={data?.title_ru}
                  type='primary'
                  icon={<PlusOutlined />}
                  style={{width: '100%'}}
                  onClick={addArticle}>
                Add
              </Button>
            </Col>
          </Row>
          <Spin
              size='medium'
              spinning={getLoading}>
            <AboutIndexTable
                data={[data]}

            />
          </Spin>
        </Space>
      </div>
  );
};

export default Index;
