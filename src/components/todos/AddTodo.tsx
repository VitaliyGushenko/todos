import React, { useCallback, useState } from 'react';
import { Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import './../../pages/Pages.css';
import { fetchAddTodo } from '../../redux/actions/todo/actions';
import './style.css';
import { ITodo } from '../../interfaces/todo/ITodo';

const AddTodo = ({ userName, userUid }: ITodo) => {
  let [todo, setTodo] = useState('');

  const dispatch = useDispatch();

  const add = () => {
    const dataAddTodo = {
      userName,
      userUid,
      todo: todo,
      completed: false,
    };

    dispatch(fetchAddTodo(dataAddTodo));
    setTodo('');
  };

  const setTodoCallback = useCallback((event) => {
    event.persist();
    setTodo(event.target.value);
  }, []);

  return (
    <div className='addItem'>
      <Input
        type='text'
        className='inpt'
        onChange={setTodoCallback}
        value={todo}
        placeholder='What needs to be done'
      />
      <Button className='registerBtn inptBtn' onClick={add}>
        Add item
      </Button>
    </div>
  );
};

export default AddTodo;
