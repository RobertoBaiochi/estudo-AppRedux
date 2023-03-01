import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Você fez login');

    axios.defaults.headers.head.Authorization = `Bearer ${response.data.token}`;
    // eslint-disable-next-line no-console
    console.log(payload.prevPath);
    history.push(payload.prevPath);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(payload.location);
    toast.error('Usuário ou senha inválidos.');
    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');

  if (!token) return;

  axios.defaults.headers.head.Authorization = `Bearer ${token}`;

  // eslint-disable-next-line no-console
  console.log(axios.defaults.headers.head.Authorization);
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
