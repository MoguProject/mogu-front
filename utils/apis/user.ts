import { axiosInstance } from 'axiosInstance';
import { LoginSubmitData, SignupSubmitData } from 'types';

export const loginApi = ({ email, password }: LoginSubmitData) => {
  return axiosInstance
    .post(
      '/user/login',
      {
        email,
        password,
      },
      {},
    )
    .then((response) => response.data);
};

export const signupApi = ({
  email,
  name,
  nickname,
  password,
  phone,
}: SignupSubmitData) => {
  return axiosInstance
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
  return axiosInstance
    .get('/user/login/info')
    .then((response) => response.data);
};

export const emailCertificateApi = (email: string) => {
  return axiosInstance
    .post('/user/email/certificate', {
      email,
    })
    .then((response) => response.data);
};

export const getMyPageUserDataApi = () => {
  return axiosInstance.get('/user/mypage').then((response) => response.data);
};

export const editProfileApi = ({ data, token }) => {
  return axiosInstance.put('/user/update', {}).then((res) => res.data);
};
