const set = (email) => localStorage.setItem('userEmail', email);
const get = () => localStorage.getItem('userEmail');

export { set, get };
