import axios from 'axios';
import { axiosInstance } from 'axiosInstance';
import { LoginSubmitData, SignupSubmitData } from 'types';

export const loginApi = ({ email, password }: LoginSubmitData) => {
  return axiosInstance
    .post(
      '/users/login',
      {
        email,
        password,
      },
      {
        withCredentials: true,
      },
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
    .post('/users/create', {
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
    .get('/users/login/info')
    .then((response) => response.data);
};

export const emailCertificateApi = (email: string) => {
  return axiosInstance
    .post('/users/email/certificate', {
      email,
    })
    .then((response) => response.data);
};

export const getMyPageUserDataApi = () => {
  return axiosInstance.get('/users/mypage').then((response) => response.data);
};

export const updateMyPageUserDataAp = (data: any) => {
  return axios
    .put('/users/update', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => res.data);
};

export const getMyPageProjectPostsApi = () => {
  return axiosInstance
    .get('/users/mypage/post/project')
    .then((response) => response.data);
};

export const getMyPageStudyPostsApi = () => {
  return axiosInstance
    .get('/users/mypage/post/study')
    .then((response) => response.data);
};

export const getMyPageRepliedApi = () => {
  return axiosInstance
    .get('/users/mypage/post/replied')
    .then((response) => response.data);
};

export const getMyPageLikedApi = () => {
  return axiosInstance
    .get('/users/mypage/post/liked')
    .then((response) => response.data);
};

export const myPageChangePasswordApi = (data: any) => {
  return axiosInstance
    .put('/users/update/password', data)
    .then((res) => res.data);
};

export const createNewPasswordApi = ({
  email,
  name,
}: {
  email: string;
  name: string;
}) => {
  return axiosInstance
    .post('/users/email/create/new-password', { email, name })
    .then((res) => res.data);
};
