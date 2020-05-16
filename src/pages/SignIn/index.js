import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Gobaber" />

      <form>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="button">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
