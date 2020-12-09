import React, { useCallback, useState } from 'react';
import { Button, Input, DatePicker } from 'antd';
import { useDispatch } from 'react-redux';
import './../../pages/Pages.css';
import { fetchAddTodo } from '../../redux/actions/todo/actions';
import './style.css';
import { ITodo } from '../../interfaces/todo/ITodo';

const AddTodo = ({ userName, userUid }: ITodo) => {
  let [todo, setTodo] = useState('');
  let [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  const add = () => {
    console.log('DATE', date);
    const dataAddTodo = {
      userName,
      userUid,
      todo: todo,
      completed: false,
      dateCompleted: date
    };

    dispatch(fetchAddTodo(dataAddTodo));
    setTodo('');
  };

  const setTodoCallback = useCallback((event) => {
    event.persist();
    setTodo(event.target.value);
  }, []);

  const setDateCallback = useCallback((event) => {
    console.log(event.date(), event.month()+1, event.year());
    const date = new Date(event.year(), event.month(), event.date());
    console.log(date);
    setDate(date);
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
      <DatePicker className='dateField' onChange={setDateCallback} format={['DD/MM/YYYY', 'DD/MM/YY']} />
      <Button className='registerBtn inptBtn' onClick={add}>
        Add item
      </Button>
    </div>
  );
};

export default AddTodo;
