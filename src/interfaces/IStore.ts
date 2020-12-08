import { ITodo } from './todo/ITodo';
import { IUserInfoData } from './user/IStoreUserInfoData';

export interface IStore {
  todos: IStoreTodo;
  userInfo: IStoreUserInfo;
}

export interface IStoreUserInfo {
  data: IUserInfoData;
  error: boolean;
  loading: boolean;
}

export interface IStoreTodo {
  data: Array<ITodo>;
  error: boolean;
  loading: boolean;
}
