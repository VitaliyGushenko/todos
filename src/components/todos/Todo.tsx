import { Button } from 'antd';
import React, { Fragment, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ITodoKey } from '../../interfaces/todo/ITodo';
import {
  fetchCompleteTodo,
  fetchDeleteTodo,
} from '../../redux/actions/todo/actions';
import './../../pages/Pages.css';

const Todo = ({ todosInfo }: ITodoKey) => {
  const dispatch = useDispatch();

  const date: any = new Date(todosInfo.dateCompleted.seconds * 1000);
  const nowDate: any = new Date(Date.now());

  const month = (date.getMonth()+1 < 10) ? '0'+ (date.getMonth()+1) : date.getMonth()+1;
  const checkDate = date < new Date(Date.now());

  const completeTodo = useCallback(
    (e) => {
      dispatch(fetchCompleteTodo(todosInfo.todo!));
    },
    [dispatch, todosInfo.todo]
  );

  const deleteTodo = useCallback(
    (e) => {
      dispatch(fetchDeleteTodo(todosInfo.todo!));
    },
    [dispatch, todosInfo.todo]
  );

  const differenceDays = Math.floor((nowDate - date) / (60 * 60 * 24 * 1000));

  const title = 'Time to complete the task ended ' + differenceDays + ' days ago';

  const infoTodoBtn = (
    <Button className='deleteBtnProduct' title={title}>
      <img
        src='https://www.flaticon.com/svg/static/icons/svg/2489/2489250.svg'
        alt='complete'
      ></img>
    </Button>
  );

  const deleteTodoBtn = (
    <Button onClick={deleteTodo} className='deleteBtnProduct'>
      <img
        src='https://img.icons8.com/fluent/344/delete-sign.png'
        alt='delete'
      ></img>
    </Button>
  );

  const completeTodoBtn = (
    <Button onClick={completeTodo} className='deleteBtnProduct'>
      <img
        src='https://cdn.icon-icons.com/icons2/894/PNG/512/Tick_Mark_icon-icons.com_69146.png'
        alt='complete'
      ></img>
    </Button>
  );

  const todoCommon = (
    <div className='productContent'>
      {!todosInfo.completed ? <span>{todosInfo.todo}</span> : <s>{todosInfo.todo}</s>}
      {`${date.getDate()}.${month}.${date.getFullYear()}`}
      <div className='productBtn'>
        {!todosInfo.completed && !checkDate ? completeTodoBtn: null}
        {checkDate && differenceDays !== 0 && !todosInfo.completed ? infoTodoBtn: null}
        {deleteTodoBtn}
      </div>
    </div>
  );

  const todo = checkDate && differenceDays !== 0 && !todosInfo.completed ? <div className='timeOutTodo'>{todoCommon}</div> : <div>{todoCommon}</div>;

  return (
    <Fragment>
      {todo}
    </Fragment>
  );
};

export default Todo;
