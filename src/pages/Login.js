import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import TrybeWalletHeader from '../components/TrybeWalletHeader';

import { userLogin } from '../store/actions/user';
import { checkEmail, checkPassword } from '../utils/login';

import walletSvg from '../assets/wallet.svg';
import styles from '../styles/tailwindStyles';

const Login = () => {
  const { loginStyles } = styles;
  const { users } = useSelector((state) => state.accounts);

  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);

  const [password, setPassword] = useState('');
  const [invalidPassword, setInvalidPassword] = useState(false);

  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();
  const addUser = () => {
    const user = {
      email,
      password,
    };

    dispatch(userLogin(user));
  };

  const checkUser = () => {
    const findEmail = users.find((user) => user.email === email);
    const findPassword = findEmail?.password === password;

    if (findEmail && findPassword) {
      addUser();
      setRedirect(true);
      return;
    }
    if (!findEmail) {
      setEmail('');
      setInvalidEmail(true);
    }
    if (!findPassword) setInvalidPassword(true);

    setPassword('');
  };

  const checkLogin = () => checkEmail(email) && checkPassword(password);

  const errorElement = () => {
    const renderDiv = (msg) => (
      <div className={loginStyles.errorMsg}>
        <p>{msg} inválida.</p>
        <p>Verifique as informações e tente novamente.</p>
      </div>
    );
    if (invalidEmail) return renderDiv('Conta')
    if (invalidPassword) return renderDiv('Senha');
  };

  return (
    <main className={loginStyles.base}>
      <section className={loginStyles.container}>
        <section className={loginStyles.leftContainer}>
          <TrybeWalletHeader />

          {errorElement()}

          <div className={loginStyles.leftContainerInputs}>
            <input
              className={loginStyles.input(email, invalidEmail)}
              type="email"
              data-testid="email-input"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              value={email}
            />

            <input
              className={loginStyles.input(password, invalidPassword)}
              type="password"
              data-testid="password-input"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              value={password}
            />

            <button
              className={loginStyles.leftContainerButton}
              type="button"
              disabled={!checkLogin()}
              onClick={checkUser}
            >
              Entrar
            </button>

            <section className={loginStyles.constainerCreateAccount}>
              <p>Não está registrado ainda? </p>
              <p className={loginStyles.createAccount}>Crie uma Conta</p>
            </section>
          </div>
        </section>

        <section className={loginStyles.rightContainer}>
          <img src={walletSvg} alt="wallet" />
        </section>
      </section>

      {redirect && <Redirect to="/carteira" />}
    </main>
  );
};

export default Login;
