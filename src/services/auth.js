export const TOKEN_KEY = "anex_token";
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '401181561372-e11nsnhbi7p6kvhpcn04qcnfett035uj.apps.googleusercontent.com';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};