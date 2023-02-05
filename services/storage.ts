export const TOKEN_KEY = '@JogaMais-Token';
export const USER_KEY = '@Logged-User';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getUser = () => {
  const userJSON = localStorage.getItem(USER_KEY);

  if (userJSON) {
    return JSON.parse(userJSON);
  }

  return null;
};

export const login = (token: string, user: unknown) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const logout = () => {
  localStorage.clear();
};
