import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './../Pages.css';
import Todo from '../../components/todos/Todo';
import AddTodo from '../../components/todos/AddTodo';
import {
  fetchTodos,
  fetchSearchTodos,
  fetchActionTodos,
  fetchDoneTodos,
} from '../../redux/actions/todo/actions';
import './Todos.css';
import { IUserInfoData } from '../../interfaces/user/IStoreUserInfoData';
import { IStore } from '../../interfaces/IStore';
import { ITodo } from '../../interfaces/todo/ITodo';

import { Button, Input } from 'antd';

const Todos = ({ name, uid }: IUserInfoData) => {
  const [check, fCheck] = useState(false);

  const [searchValue, setSearch] = useState('');

  const dispatch = useDispatch();

  const todos = useSelector((state: IStore) => {
    return state.todos.data;
  });

  const loading = useSelector((state: IStore) => state.todos.loading);

  useEffect(() => {
    dispatch(fetchTodos());
    fCheck(true);
  }, [dispatch]);

  const listTodos =
    todos !== undefined
      ? todos.map((element: ITodo) => {
          return <Todo key={element.key!} todosInfo={element} />;
        })
      : null;

  const setSearchCallback = useCallback(
    (event) => {
      event.persist();
      setSearch(event.target.value);
      dispatch(fetchSearchTodos(event.target.value));
    },
    [dispatch]
  );

  const getAll = useCallback(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const getAction = useCallback(() => {
    dispatch(fetchActionTodos());
  }, [dispatch]);

  const getDone = useCallback(() => {
    dispatch(fetchDoneTodos());
  }, [dispatch]);

  const btnFiler = (
    <div className='filter-block'>
      <div className='filter'>
        <Input
          className='inpt'
          placeholder='search'
          onChange={setSearchCallback}
          value={searchValue}
        ></Input>
        <div className='allBtn'>
          <Button onClick={getAll} className='btnProduct'>
            All
          </Button>
          <Button onClick={getAction} className='btnProduct'>
            Active
          </Button>
          <Button onClick={getDone} className='btnProduct'>
            Done
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      <h2>List Todos</h2>
      {btnFiler}
      {loading || !check ? (
        <p></p>
      ) : (
        <div>
          <div className='contentStyleListProducts'>
            {listTodos?.length !== 0? listTodos : <h2>No items</h2>}
            <AddTodo userName={name} userUid={uid} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Todos;
