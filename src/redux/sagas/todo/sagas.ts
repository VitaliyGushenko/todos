import { takeEvery, put, call } from 'redux-saga/effects';
import {
  fetchTodos,
  requestAddTodo,
  requestErrorAddTodo,
  requestErrorTodos,
  requestSuccessAddTodo,
  requestSuccessTodos,
  requestTodos,
  requestCompleteTodo,
  requestErrorCompleteTodo,
  requestSuccessCompleteTodo,
  requestDeleteTodo,
  requestErrorDeleteTodo,
  requestSuccessDeleteTodo,
} from '../../actions/todo/actions';

import {
  addTodo,
  completeTodo,
  deleteTodo,
  getTodos,
} from '../../../firebase/firebase.services';

import {
  FETCHED_ADD_TODO,
  FETCHED_TODOS,
  FETCHED_COMPLETE_TODO,
  FETCHED_DELETE_TODO,
  FETCHED_ACTION_TODOS,
  FETCHED_DONE_TODOS,
  FETCHED_SEARCH_TODOS,
} from '../../types/todo/types';
import {
  ITodoFetch,
  ITodoRequestSuccsess,
} from '../../../interfaces/todo/ITodoRequestSuccsess';
import { ITodoCompleatedDeleted } from '../../../interfaces/todo/ITodo';

// add todo

export function* watchFetchAddTodo() {
  yield takeEvery(FETCHED_ADD_TODO, fetchAsyncAddTodo);
}

function* fetchAsyncAddTodo(dataAddTodo: ITodoRequestSuccsess) {
  try {
    yield put(requestAddTodo());
    yield call(() => {
      return addTodo(dataAddTodo);
    });

    yield put(requestSuccessAddTodo());
    yield put(fetchTodos());
  } catch (error) {
    yield put(requestErrorAddTodo());
  }
}

// filter

export function* watchFetchActionTodos() {
  yield takeEvery(FETCHED_ACTION_TODOS, fetchAsyncTodos);
}

export function* watchFetchDoneTodos() {
  yield takeEvery(FETCHED_DONE_TODOS, fetchAsyncTodos);
}

export function* watchFetchSearchTodos() {
  yield takeEvery(FETCHED_SEARCH_TODOS, fetchAsyncTodos);
}

// get todos

export function* watchFetchTodos() {
  yield takeEvery(FETCHED_TODOS, fetchAsyncTodos);
}

function* fetchAsyncTodos(todoData: ITodoFetch) {
  try {
    yield put(requestTodos());
    const data = yield call(() => {
      return getTodos(todoData);
    });
    yield put(requestSuccessTodos(data));
  } catch (error) {
    yield put(requestErrorTodos());
  }
}

// complete todo

export function* watchFetchCompleteTodo() {
  yield takeEvery(FETCHED_COMPLETE_TODO, fetchAsyncCompleteTodo);
}

function* fetchAsyncCompleteTodo(todoData: ITodoCompleatedDeleted) {
  try {
    yield put(requestCompleteTodo());
    yield call(() => {
      return completeTodo(todoData.todo);
    });
    yield put(requestSuccessCompleteTodo());
    yield put(fetchTodos());
  } catch (error) {
    yield put(requestErrorCompleteTodo());
  }
}

// delete todo

export function* watchFetchDeleteTodo() {
  yield takeEvery(FETCHED_DELETE_TODO, fetchAsyncDeleteTodo);
}

function* fetchAsyncDeleteTodo(todoData: ITodoCompleatedDeleted) {
  try {
    yield put(requestDeleteTodo());
    yield call(() => {
      return deleteTodo(todoData.todo);
    });
    yield put(requestSuccessDeleteTodo());
    yield put(fetchTodos());
  } catch (error) {
    yield put(requestErrorDeleteTodo());
  }
}
