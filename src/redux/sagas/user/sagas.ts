import { takeEvery, put, call } from 'redux-saga/effects';

import {
  FETCHED_LOGIN_USER,
  FETCHED_REGISTER_USER,
  FETCHED_USER,
} from '../../types/user/types';
import {
  requestErrorLoginUser,
  requestErrorRegisterUser,
  requestErrorUser,
  requestLoginUser,
  requestRegisterUser,
  requestSuccessLoginUser,
  requestSuccessRegisterUser,
  requestSuccessUser,
  requestUser,
} from '../../actions/user/actions';
import {
  getInfoCurrentUser,
  loginUser,
  registerUser,
} from '../../../firebase/firebase.services';
import {
  IUserLoginType,
  IUserType,
} from '../../../interfaces/user/IUserLoginType';

// login User

export function* watchFetchLoginUser() {
  yield takeEvery(FETCHED_LOGIN_USER, fetchAsyncLoginUser);
}

function* fetchAsyncLoginUser({ userLoginInfo }: IUserLoginType) {
  try {
    const { email, password } = userLoginInfo;
    yield put(requestLoginUser());
    yield call(() => {
      loginUser(email!, password!);
    });

    yield put(requestSuccessLoginUser());
  } catch (error) {
    yield put(requestErrorLoginUser());
  }
}

// register User

export function* watchFetchRegisterUser() {
  yield takeEvery(FETCHED_REGISTER_USER, fetchAsyncRegisterUser);
}

function* fetchAsyncRegisterUser({ userLoginInfo }: IUserLoginType) {
  try {
    const { email, name, password } = userLoginInfo;
    yield put(requestRegisterUser());
    yield call(() => {
      registerUser(email!, name!, password!);
    });

    yield put(requestSuccessRegisterUser());
  } catch (error) {
    yield put(requestErrorRegisterUser());
  }
}

// show info current User

export function* watchFetchUser() {
  yield takeEvery(FETCHED_USER, fetchAsync);
}

function* fetchAsync({ uid }: IUserType) {
  try {
    yield put(requestUser());
    const data = yield call(() => {
      return getInfoCurrentUser(uid);
    });

    yield put(requestSuccessUser(data));
  } catch (error) {
    yield put(requestErrorUser());
  }
}
