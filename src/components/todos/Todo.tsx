import { Button } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ITodoKey } from '../../interfaces/todo/ITodo';
import {
  fetchCompleteTodo,
  fetchDeleteTodo,
} from '../../redux/actions/todo/actions';
import './../../pages/Pages.css';

const Todo = ({ todosInfo }: ITodoKey) => {
  const dispatch = useDispatch();

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

  const todo = (
    <div className='productContent'>
      {todosInfo.todo}
      <div className='productBtn'>
        {completeTodoBtn}
        {deleteTodoBtn}
      </div>
    </div>
  );

  const todoComplete = (
    <div className='productContent'>
      <s>{todosInfo.todo}</s>
      <div className='productBtn'>{deleteTodoBtn}</div>
    </div>
  );

  return (
    <div>
      {!todosInfo.completed ? todo : todoComplete}
    </div>
  );
};

export default Todo;
