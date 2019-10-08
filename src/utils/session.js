const LOCAL_STORAGE_KEY = 'session';

const createSession = () => {
  const session = Math.random()
    .toString(16)
    .substr(2, 9);
  localStorage.setItem(LOCAL_STORAGE_KEY, session);
  return session;
};

const getSession = () => {
  return localStorage.getItem(LOCAL_STORAGE_KEY);
};

export default () => {
  return getSession() || createSession();
};
