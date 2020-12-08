import { IUserInfoData } from '../../../interfaces/user/IStoreUserInfoData';
import {
  FETCHED_LOGIN_USER,
  FETCHED_REGISTER_USER,
  REQUESTED_FAILED_LOGIN_USER,
  REQUESTED_FAILED_REGISTER_USER,
  REQUESTED_LOGIN_USER,
  REQUESTED_REGISTER_USER,
  REQUESTED_SUCCEEDED_LOGIN_USER,
  REQUESTED_SUCCEEDED_REGISTER_USER,
  REQUESTED_FAILED_USER,
  REQUESTED_SUCCEEDED_USER,
  REQUESTED_USER,
  FETCHED_USER,
} from '../../types/user/types';

// login User
export const requestLoginUser = () => {
  return { type: REQUESTED_LOGIN_USER };
};

export const requestSuccessLoginUser = () => {
  return { type: REQUESTED_SUCCEEDED_LOGIN_USER };
};

export const requestErrorLoginUser = () => {
  return { type: REQUESTED_FAILED_LOGIN_USER };
};

export const fetchLoginUser = (data: IUserInfoData) => {
  return { type: FETCHED_LOGIN_USER, userLoginInfo: data };
};

// register User
export const requestRegisterUser = () => {
  return { type: REQUESTED_REGISTER_USER };
};

export const requestSuccessRegisterUser = () => {
  return { type: REQUESTED_SUCCEEDED_REGISTER_USER };
};

export const requestErrorRegisterUser = () => {
  return { type: REQUESTED_FAILED_REGISTER_USER };
};

export const fetchRegisterUser = (data: IUserInfoData) => {
  return { type: FETCHED_REGISTER_USER, userLoginInfo: data };
};

// show info current User
export const requestUser = () => {
  return { type: REQUESTED_USER };
};

export const requestSuccessUser = (data: IUserInfoData) => {
  return { type: REQUESTED_SUCCEEDED_USER, userInfo: data };
};

export const requestErrorUser = () => {
  return { type: REQUESTED_FAILED_USER };
};

export const fetchUser = (uid: string) => {
  return { type: FETCHED_USER, uid: uid };
};
