import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import TrybeWalletHeader from '../components/TrybeWalletHeader';

import { userLogin } from '../store/actions/user';
import { checkEmail, checkPassword } from '../utils/login';

import walletSvg from '../assets/wallet.svg';
import styles from '../styles/tailwindStyles';

const Login = () => {
  const { loginStyles } = styles;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const addUser = () => {
    const user = {
      email,
      password,
    };

    dispatch(userLogin(user));
  };

  const checkLogin = () => checkEmail(email) && checkPassword(password);

  return (
    <main className={loginStyles.base}>
      <section className={loginStyles.container}>
        <section className={loginStyles.leftContainer}>

          <TrybeWalletHeader />
          
          <div className={loginStyles.leftContainerInputs}>
            <input
              className={loginStyles.input(email)}
              type="email"
              data-testid="email-input"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
            
            <input
              className={loginStyles.input(password)}
              type="password"
              data-testid="password-input"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            
            <button
              className={loginStyles.leftContainerButton}
              type="button"
              disabled={!checkLogin()}
              onClick={addUser}
            >
              <Link to="/carteira">Entrar</Link>
            </button>
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
