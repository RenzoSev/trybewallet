import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { userLogin } from '../actions';
import { checkEmail, checkPassword } from '../utils/login';

import walletSvg from '../assets/wallet.svg'

const Login = () => {
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
    <main className="h-screen bg-gray-100 flex flex-col justify-center px-16">
      <section className="flex"> 
        <section className="flex flex-col w-1/2 bg-blue-200 rounded p-6">
          <input
            className=""
            type="email"
            data-testid="email-input"
            onChange={ (e) => setEmail(e.target.value) }
          />
          <input
            type="password"
            data-testid="password-input"
            onChange={ (e) => setPassword(e.target.value) }
          />
          <button type="button" disabled={ !checkLogin() } onClick={ addUser }>
            <Link to="/carteira">Entrar</Link>
          </button>
        </section>

        <section className="bg-red-200 w-1/2 rounded p-6">
          <img src={walletSvg} alt="wallet" />
        </section>
      </section>
    </main>
  );
};

export default Login;
