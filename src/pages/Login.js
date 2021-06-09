import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { userLogin } from '../actions';
import { checkEmail, checkPassword } from '../utils/login';

import walletSvg from '../assets/wallet.svg';

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
    <main className="h-screen bg-gray-100 flex flex-col justify-center px-20">
      <section className="h-4/5 flex shadow-lg">
        <section className="flex flex-col items-center gap-6 w-1/2 bg-white rounded p-6">
          <input
            className="w-3/5 py-2 px-4 text-lg outline-none border-2 border-green-200 rounded-xl"
            type="email"
            data-testid="email-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-3/5 py-2 px-4 text-lg outline-none border-2 border-green-200 rounded-xl"
            type="password"
            data-testid="password-input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-3/5 p-3 bg-purple-500 rounded-xl text-xl text-white shadow"
            type="button"
            disabled={!checkLogin()}
            onClick={addUser}
          >
            <Link to="/carteira">Entrar</Link>
          </button>
        </section>

        <section className="flex flex-col justify-center bg-purple-400 w-1/2 rounded p-6">
          <img src={walletSvg} alt="wallet" />
        </section>
      </section>
    </main>
  );
};

export default Login;
