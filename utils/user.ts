import axios from 'axios';
import { LoginSubmitData, SignupSubmitData } from 'types';
import { backUrl } from '../config/config';

axios.defaults.baseURL = backUrl;

export const loginApi = ({ email, password }: LoginSubmitData) =>
  axios
    .post('/user/login', {
      email,
      password,
    })
    .then((response) => response.data);

export const signupApi = ({
  email,
  name,
  nickname,
  password,
  phone,
}: SignupSubmitData) =>
  axios
    .post('/user/create', {
      email,
      name,
      nickname,
      password,
      phone,
    })
    .then((response) => response.data);

export const emailCertificateApi = (email: string) =>
  axios
    .post('/user/email/certificate', {
      email,
    })
    .then((response) => response.data);
