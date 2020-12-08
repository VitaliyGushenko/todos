import { Button, Layout } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import fire from '../../firebase/fire';
import './Header.css';
import { IUserInfoData } from '../../interfaces/user/IStoreUserInfoData';

const { Header } = Layout;

function MyHeader({ name }: IUserInfoData) {
  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <Header className='header'>
      {!name ? (
        <p>Loading...</p>
      ) : (
        <div>
          {name}
          {
            <NavLink to='/login'>
              <Button onClick={logout} className='logoutBtn'>
                Logout
              </Button>
            </NavLink>
          }
        </div>
      )}
    </Header>
  );
}

export default MyHeader;
