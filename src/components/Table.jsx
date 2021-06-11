import React from 'react';
import elements from '../services/inputs';
import styles from '../styles/tailwindStyles';
import TBody from './TBody';

const Table = () => (
  <table className={styles.walletStyles.table}>
    <thead className="text-base">
      <tr>
        {elements.th.map((th) => (
          <th className="px-4 py-2" key={th}>
            {th}
          </th>
        ))}
      </tr>
    </thead>
    <TBody />
  </table>
);

export default Table;
