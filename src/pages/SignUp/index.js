import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Informe o email'),
  password: Yup.string()
    .required('Informe a senha.')
    .min(6, 'No mínimo 6 caracteres'),
  name: Yup.string().required('Informe o nome.'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    const { name, email, password } = data;
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="Gobaber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho conta</Link>
      </Form>
    </>
  );
}
