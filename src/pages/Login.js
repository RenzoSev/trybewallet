import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import TrybeWalletHeader from '../components/TrybeWalletHeader';

import { userLogin, userRedirect } from '../store/actions/user';
import { checkEmail, checkPassword } from '../utils/login';

import walletSvg from '../assets/wallet.svg';
import styles from '../styles/tailwindStyles';
import exitAccount from '../store/actions/wallet/exit';

const Login = () => {
  const { loginStyles } = styles;
  const { accounts, user, wallet } = useSelector((state) => state);

  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);

  const [password, setPassword] = useState('');
  const [invalidPassword, setInvalidPassword] = useState(false);

  const dispatch = useDispatch();
  const addUser = () => {
    const user = {
      email,
      password,
    };

    dispatch(userLogin(user));
  };

  const checkUser = () => {
    const findEmail = accounts.users.find((user) => user.email === email);
    const findPassword = findEmail?.password === password;

    if (findEmail && findPassword) {
      addUser();
      dispatch(userRedirect());
      if (wallet.exit) dispatch(exitAccount());
      return;
    }
    if (!findEmail) {
      setEmail('');
      setPassword('');
      setInvalidEmail(true);
      setInvalidPassword(true);
      return;
    }
    if (!findPassword) {
      setInvalidEmail(false);
      setInvalidPassword(true);
      setPassword('');
      return;
    }
  };

  const checkLogin = () => checkEmail(email) && checkPassword(password);

  const errorElement = () => {
    const renderDiv = (msg) => (
      <div className={loginStyles.errorMsg}>
        <p>{msg} inválida.</p>
        <p>Verifique as informações e tente novamente.</p>
      </div>
    );
    if (invalidEmail) return renderDiv('Conta');
    if (invalidPassword) return renderDiv('Senha');
  };

  if (user.email) return <Redirect to="/carteira" />;

  if (user.redirect) return <Redirect to="/carteira" />;

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
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              value={email}
            />

            <input
              className={loginStyles.input(password, invalidPassword)}
              type="password"
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
              <p className={loginStyles.createAccount}>
                <Link to="/register">Crie uma Conta</Link>
              </p>
            </section>
          </div>
        </section>

        <section className={loginStyles.rightContainer}>
          <img src={walletSvg} alt="wallet" />
        </section>
      </section>
    </main>
  );
};

export default Login;
