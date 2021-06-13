import actions from '../';

export const userLogin = (payload) => ({
  type: actions.USER_LOGIN,
  payload,
});

export const userRedirect = () => ({
  type: actions.USER_REDIRECT,
});

export const userRemove = () => ({
  type: actions.USER_REMOVE,
});
