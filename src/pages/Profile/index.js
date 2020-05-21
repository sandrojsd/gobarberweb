import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';
import AvatarInput from './AvatarInput';

function Profile() {
  const dispath = useDispatch();

  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {
    dispath(updateProfileRequest(data));
  }

  function handleSigOut() {
    dispath(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu endereço de email" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>

      <button type="button" onClick={handleSigOut}>
        Sair do Gobarber
      </button>
    </Container>
  );
}

export default Profile;
