import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    console.tron.log(api);

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    console.tron.log(response.data);

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Usuário não prestador de serviço');
      return;
    }

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    yield put(signFailure());
    toast.error('Falha na autenticação, verifique seus dados');
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
