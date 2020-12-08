import { ITodo } from '../../../interfaces/todo/ITodo';
import {
  FETCHED_ADD_TODO,
  FETCHED_TODOS,
  REQUESTED_ADD_TODO,
  REQUESTED_FAILED_ADD_TODO,
  REQUESTED_FAILED_TODOS,
  REQUESTED_SUCCEEDED_ADD_TODO,
  REQUESTED_SUCCEEDED_TODOS,
  REQUESTED_TODOS,
  REQUESTED_COMPLETE_TODO,
  REQUESTED_FAILED_COMPLETE_TODO,
  REQUESTED_SUCCEEDED_COMPLETE_TODO,
  FETCHED_COMPLETE_TODO,
  FETCHED_DELETE_TODO,
  REQUESTED_DELETE_TODO,
  REQUESTED_FAILED_DELETE_TODO,
  REQUESTED_SUCCEEDED_DELETE_TODO,
  FETCHED_ACTION_TODOS,
  FETCHED_DONE_TODOS,
  FETCHED_SEARCH_TODOS,
} from '../../types/todo/types';

// add todo
export const requestAddTodo = () => {
  return { type: REQUESTED_ADD_TODO };
};

export const requestSuccessAddTodo = () => {
  return { type: REQUESTED_SUCCEEDED_ADD_TODO };
};

export const requestErrorAddTodo = () => {
  return { type: REQUESTED_FAILED_ADD_TODO };
};

export const fetchAddTodo = (data: ITodo) => {
  return { type: FETCHED_ADD_TODO, data: data };
};

// show todo

export const requestTodos = () => {
  return { type: REQUESTED_TODOS };
};

export const requestSuccessTodos = (data: ITodo) => {
  return { type: REQUESTED_SUCCEEDED_TODOS, data: data };
};

export const requestErrorTodos = () => {
  return { type: REQUESTED_FAILED_TODOS };
};

export const fetchTodos = () => {
  return { type: FETCHED_TODOS, filter: 'all' };
};

// complete todo

export const requestCompleteTodo = () => {
  return { type: REQUESTED_COMPLETE_TODO };
};

export const requestSuccessCompleteTodo = () => {
  return { type: REQUESTED_SUCCEEDED_COMPLETE_TODO };
};

export const requestErrorCompleteTodo = () => {
  return { type: REQUESTED_FAILED_COMPLETE_TODO };
};

export const fetchCompleteTodo = (todo: string) => {
  return { type: FETCHED_COMPLETE_TODO, todo: todo };
};

// delete todo

export const requestDeleteTodo = () => {
  return { type: REQUESTED_DELETE_TODO };
};

export const requestSuccessDeleteTodo = () => {
  return { type: REQUESTED_SUCCEEDED_DELETE_TODO };
};

export const requestErrorDeleteTodo = () => {
  return { type: REQUESTED_FAILED_DELETE_TODO };
};

export const fetchDeleteTodo = (todo: string) => {
  return { type: FETCHED_DELETE_TODO, todo: todo };
};

// filters

export const fetchSearchTodos = (value: string) => {
  return { type: FETCHED_SEARCH_TODOS, filter: 'search', value };
};

export const fetchActionTodos = () => {
  return { type: FETCHED_ACTION_TODOS, filter: 'action' };
};

export const fetchDoneTodos = () => {
  return { type: FETCHED_DONE_TODOS, filter: 'done' };
};
