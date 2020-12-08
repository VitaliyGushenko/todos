import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/actions/user/actions';
import { Route, useHistory } from 'react-router-dom';
import Header from './header/Header';
import './Home.css';
import Todos from './todos/Todos';
import { IUserInfoData } from '../interfaces/user/IStoreUserInfoData';
import { IStore } from '../interfaces/iStore';
import { Layout } from 'antd';

const { Content } = Layout;

const Home = ({ email, uid }: IUserInfoData) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [check, fCheck] = useState(false);

  const userCurrent = useSelector((state: IStore) => {
    return state.userInfo.data;
  });
  const loading = useSelector((state: IStore) => state.userInfo.loading);
  const error = useSelector((state: IStore) => state.userInfo.error);

  const name = userCurrent.name;
  const password = userCurrent.password;

  useEffect(() => {
    history.push('/todos');
    dispatch(fetchUser(uid!));
    fCheck(true);
  }, [dispatch, history, uid]);

  const header =
    loading || !check ? (
      <Header email='' name='' password='' />
    ) : (
      <Header email={email} name={name} password={password} />
    );

  return (
    <div className='app-wrapper'>
      {header}
      <div className='app-wrapper-content'>
        <Content className='contentStyleProducts'>
          <div className='site-layout-background'>
            <div className='contentStyleProductsChildren'>
              {loading || !check ? (
                <h2 className='centerLoadMessage'>
                  {!error ? 'Loading...' : 'Error, try again'}
                </h2>
              ) : (
                <Route
                  path='/todos'
                  render={() => <Todos name={name} uid={uid} />}
                />
              )}
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
};

export default Home;
