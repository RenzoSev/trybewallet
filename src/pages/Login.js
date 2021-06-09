import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { userLogin } from '../actions';
import { checkEmail, checkPassword } from '../utils/login';

import walletSvg from '../assets/wallet.svg';
import styles from '../styles/tailwindStyles';

const Login = () => {
  const { login } = styles;
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
    <main className={login.base}>
      <section className={login.container}>
        <section className={login.leftContainer}>

          <h1 className="text-3xl text-gray-600">
            <span className="text-green-400">T</span>
            <span>rybe</span>
            <span className="text-purple-400">W</span>
            <span>allet</span>
          </h1>
          
          <div className={login.leftContainerInputs}>
            <input
              className={login.input(email)}
              type="email"
              data-testid="email-input"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
            
            <input
              className={login.input(password)}
              type="password"
              data-testid="password-input"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            
            <button
              className={login.leftContainerButton}
              type="button"
              disabled={!checkLogin()}
              onClick={addUser}
            >
              <Link to="/carteira">Entrar</Link>
            </button>
          </div>
        </section>

        <section className={login.rightContainer}>
          <img src={walletSvg} alt="wallet" />
        </section>
      </section>
    </main>
  );
};

export default Login;
