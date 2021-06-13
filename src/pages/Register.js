import React, { useState } from 'react';
import TrybeWalletHeader from '../components/TrybeWalletHeader';
import styles from '../styles/tailwindStyles';
import cofreSvg from '../assets/cofre.svg';

const Register = () => {
  const { registerStyles } = styles;

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className={registerStyles.base}>
      <section className={registerStyles.container}>
        <section className={registerStyles.leftContainer}>
          <img src={cofreSvg} alt="wallet" />
        </section>

        <section className={registerStyles.rightContainer}>
          <TrybeWalletHeader />

          <div className={registerStyles.rightContainerInputs}>
            <input
              className={registerStyles.input(name, false)}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              value={email}
            />

            <input
              className={registerStyles.input(email, false)}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              value={email}
            />

            <input
              className={registerStyles.input(password, false)}
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
              onClick={() => console.log('oi!')}
            >
              Cadastra-se
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Register;
