import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import {
  watchFetchLoginUser,
  watchFetchRegisterUser,
  watchFetchUser,
} from './redux/sagas/user/sagas';
import rootReducer from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import {
  watchFetchAddTodo,
  watchFetchTodos,
  watchFetchCompleteTodo,
  watchFetchDeleteTodo,
  watchFetchActionTodos,
  watchFetchDoneTodos,
  watchFetchSearchTodos,
} from './redux/sagas/todo/sagas';

const sagaMeddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMeddleware));
sagaMeddleware.run(watchFetchRegisterUser);
sagaMeddleware.run(watchFetchLoginUser);
sagaMeddleware.run(watchFetchUser);

sagaMeddleware.run(watchFetchAddTodo);
sagaMeddleware.run(watchFetchTodos);
sagaMeddleware.run(watchFetchCompleteTodo);
sagaMeddleware.run(watchFetchDeleteTodo);

sagaMeddleware.run(watchFetchActionTodos);
sagaMeddleware.run(watchFetchDoneTodos);
sagaMeddleware.run(watchFetchSearchTodos);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
