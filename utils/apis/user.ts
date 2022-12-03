import axios from 'axios';
import { LoginSubmitData, SignupSubmitData } from 'types';
import { backUrl } from '../../config/config';

axios.defaults.baseURL = backUrl;

export const loginApi = ({ email, password }: LoginSubmitData) => {
  return axios
    .post('/user/login', {
      email,
      password,
    })
    .then((response) => response.data);
};

export const signupApi = ({
  email,
  name,
  nickname,
  password,
  phone,
}: SignupSubmitData) => {
  return axios
    .post('/user/create', {
      email,
      name,
      nickname,
      password,
      phone,
    })
    .then((response) => response.data);
};

export const loadMyInfo = (token: any) => {
  return axios
    .get('/user/login/info', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data);
};

export const emailCertificateApi = (email: string) => {
  return axios
    .post('/user/email/certificate', {
      email,
    })
    .then((response) => response.data);
};

export const getMyPageUserDataApi = () => {
  return axios.get('/user/mypage').then((response) => response.data);
};
