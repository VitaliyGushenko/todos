import userReducer from './user/userReducer';
import { combineReducers } from 'redux';
import todoReducer from './todo/todoReducer';

export default combineReducers({
  userInfo: userReducer,
  todos: todoReducer,
});
