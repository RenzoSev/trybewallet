import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import TrybeWalletHeader from '../components/TrybeWalletHeader';

import cofreSvg from '../assets/cofre.svg';
import styles from '../styles/tailwindStyles';
import { addAccount } from '../store/actions/accounts';

const Register = () => {
  const { registerStyles } = styles;

  const { users } = useSelector((state) => state.accounts);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [invalidEmail, setInvalidEmail] = useState(false);

  const [redirect, setRedirect] = useState(false);
  const [registered, setRegistered] = useState(false);

  const userAccount = {
    id: users.length,
    name,
    email,
    password,
  };

  const registerUser = () => {
    const isThereEmail = users.some((user) => user.email === email);

    if (isThereEmail) {
      setInvalidEmail(true);
      return;
    }

    dispatch(addAccount(userAccount));
    setRegistered(true);
  };

  const registerElement = () => (
    <div className={registerStyles.registerMsg}>
      <p>Conta cadastrada com sucesso!</p>
      <p>Você será redirecionado para a página de login.</p>
    </div>
  );

  const redirectToLogin = () => {
    setTimeout(() => {
      if (!redirect) setRedirect(true);
    }, 2000);
  };

  const errorElement = () => (
    <div className={registerStyles.errorMsg}>
      <p>O e-mail inserido já está sendo utilizado.</p>
      <p>Verifique suas informações e tente novamente.</p>
    </div>
  );

  const errorMsg = invalidEmail && !registered;

  return (
    <main className={registerStyles.base}>
      <section className={registerStyles.container}>
        <section className={registerStyles.leftContainer}>
          <img src={cofreSvg} alt="wallet" />
        </section>

        <section className={registerStyles.rightContainer}>
          <TrybeWalletHeader />

          {errorMsg && errorElement()}
          {registered && registerElement()}

          <div className={registerStyles.rightContainerInputs}>
            <input
              className={registerStyles.input(name, errorMsg)}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              value={name}
            />

            <input
              className={registerStyles.input(email, errorMsg)}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              value={email}
            />

            <input
              className={registerStyles.input(password, errorMsg)}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              value={password}
            />

            <div className="w-3/5">
              <p className="leading-4 tracking-wide text-xs text-gray-400">
                Ao clicar em Cadastre-se, você concorda com nossos Termos,
                Política de Dados e Política de Cookies. Você poderá receber
                notificações por SMS e cancelar isso quando quiser.
              </p>
            </div>

            <button
              className={registerStyles.rightContainerButton}
              type="button"
              disabled={false}
              onClick={registerUser}
            >
              Cadastra-se
            </button>
          </div>
        </section>
      </section>

      {registered && redirectToLogin()}
      {redirect && <Redirect to="/" />}
    </main>
  );
};

export default Register;
