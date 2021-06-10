import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import EditFormWallet from '../components/EditFormWallet';

import FormWallet from '../components/FormWallet';
import Table from '../components/Table';
import TrybeWalletHeader from '../components/TrybeWalletHeader';

import styles from '../styles/tailwindStyles';

const Wallet = () => {
  const { walletStyles } = styles;

  const [totalPrice, setTotalPrice] = useState(0);

  const globalState = useSelector((state) => state);
  const { user, wallet } = globalState;

  useEffect(() => {
    const getTotalPrice = () => {
      const totalPriceRedux = wallet.expenses.reduce((acc, expense) => {
        const { value, currency, exchangeRates } = expense;
        const { ask } = exchangeRates[currency];
        const total = acc + ask * value;
        return total;
      }, 0);

      setTotalPrice(totalPriceRedux);
    };

    getTotalPrice();
  }, [wallet.expenses]);

  return (
    <main className={walletStyles.base}>
      <section className={walletStyles.container}>
        <header className={walletStyles.header}>
          <TrybeWalletHeader />
          <div className="flex gap-12">
            <p className="text-gray-600" data-testid="email-field">{user.email}</p>
            <p className="text-green-500" data-testid="total-field">
              {`Dispesa total: R$${totalPrice} BRL`}
            </p>
          </div>
        </header>
        {wallet.edit ? <EditFormWallet /> : <FormWallet />}
        <Table />
      </section>
    </main>
  );
};

export default Wallet;
