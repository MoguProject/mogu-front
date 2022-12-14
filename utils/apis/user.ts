import axios from 'axios';
import { axiosInstance } from 'axiosInstance';
import { LoginSubmitData, SignupSubmitData } from 'types';

export const loginApi = ({ email, password }: LoginSubmitData) => {
  return axiosInstance
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

export const updateMyPageUserDataAp = (data: any) => {
  return axios
    .put('/user/update', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => res.data);
};

export const getMyPageProjectPostsApi = () => {
  return axiosInstance
    .get('/user/mypage/post/project')
    .then((response) => response.data);
};

export const getMyPageStudyPostsApi = () => {
  return axiosInstance
    .get('/user/mypage/post/study')
    .then((response) => response.data);
};

export const getMyPageRepliedApi = () => {
  return axiosInstance
    .get('/user/mypage/post/replied')
    .then((response) => response.data);
};

export const getMyPageLikedApi = () => {
  return axiosInstance
    .get('/user/mypage/post/liked')
    .then((response) => response.data);
};

export const myPageChangePasswordApi = (data: any) => {
  return axiosInstance.put('/user/update/password', data);
};
