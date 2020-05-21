import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* upadateProfile({ payload }) {
  try {
    // ...rest é o resto das variáveis do data
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    console.tron.log(profile);

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));
    toast.success('Perfil atualizado com sucesso!');
  } catch (error) {
    toast.error('Erro ao atalizar o perfil, verifique os seus dados!');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', upadateProfile),
]);
