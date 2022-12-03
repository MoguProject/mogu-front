import axios from 'axios';
import cookie from 'react-cookies';

export const setToken = (accessToken: string) => {
  const expires = new Date();
  expires.setDate(Date.now() + 1000 * 60 * 60 * 12);

  cookie.save(`access_token`, accessToken, {
    path: '/',
    expires,
    httpOnly: false, // dev
  });
};

export const clearToken = () => {
  cookie.remove(`access_token`);
};
