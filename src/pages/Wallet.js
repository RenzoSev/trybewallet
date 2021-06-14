import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { BiExit } from 'react-icons/bi';

import EditFormWallet from '../components/EditFormWallet';
import FormWallet from '../components/FormWallet';
import Table from '../components/Table';
import TrybeWalletHeader from '../components/TrybeWalletHeader';

import styles from '../styles/tailwindStyles';
import { Redirect } from 'react-router-dom';
import exitAccount from '../store/actions/wallet/exit';
import { userRedirect, userRemove } from '../store/actions/user';

const Wallet = () => {
  const { walletStyles } = styles;

  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const { user, wallet, accounts } = globalState;

  const username = () => accounts.users.find(
    (userAc) => userAc.email === user.email
  ).name;

  useEffect(() => {
    const getTotalPrice = () => {
      const totalPriceRedux = wallet.expenses
        .reduce((acc, expense) => {
          const { value, currency, exchangeRates } = expense;
          const { ask } = exchangeRates[currency];
          const total = acc + ask * value;
          return total;
        }, 0)
        .toFixed(2);

      setTotalPrice(totalPriceRedux);
    };

    getTotalPrice();
  }, [wallet.expenses]);

  return wallet.exit 
  ? <Redirect to="/" />
  : (
    <main className={walletStyles.base}>
      <section className={walletStyles.container}>
        <header className={walletStyles.header}>
          <TrybeWalletHeader />
          <div className="flex gap-12">
            <p className="text-gray-600" data-testid="email-field">
              {`Olá, ${username()}!`}
            </p>
            <p className="text-green-500" data-testid="total-field">
              {`Dispesa total: R$${totalPrice} BRL`}
            </p>

            <BiExit
              className="text-red-400 text-2xl hover:text-red-300 cursor-pointer"
              onClick={() => {
                dispatch(exitAccount());
                dispatch(userRedirect());
                dispatch(userRemove());
              }}
            />
          </div>
        </header>
        {wallet.edit ? <EditFormWallet /> : <FormWallet />}
        <Table />
      </section>
    </main>
  );
};

export default Wallet;
