import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Informe o email'),
  password: Yup.string().required('Informe a senha.'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    console.tron.log(data);
    const { email, password } = data;
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Gobaber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
