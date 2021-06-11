import currencyAPI from '../../../services/api';
import filterCurrencies from '../../../utils/wallet';
import actions from '../';

const requestCurrency = () => ({ type: actions.REQUEST_CURRENCIES });

const walletCurrencies = (payload) => ({
  type: actions.WALLET_CURRENCIES,
  payload,
});

const failedRequestCurrencies = (payload) => ({
  type: actions.FAILED_CURRENCIES,
  payload,
});

export const fetchCurrency = () => async (dispatch) => {
  dispatch(requestCurrency());
  try {
    const currencies = await currencyAPI();
    const currenciesCodes = filterCurrencies(currencies);
    dispatch(walletCurrencies(currenciesCodes));
  } catch (error) {
    dispatch(failedRequestCurrencies(error));
  }
};
