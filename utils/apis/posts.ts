import axios from 'axios';
import { axiosInstance } from 'axiosInstance';

// 비 로그인 시
export const getPostDataApi = (
  categoryId: number,
  page: number,
  currentSort: 'recent' | 'liked',
) => {
  if (currentSort === 'recent') {
    return axios
      .get(`posts/list/${categoryId}?page=${page}&size=10`)
      .then((response) => response.data);
  }
  if (currentSort === 'liked') {
    return axios
      .get(`posts/list/likes/${categoryId}?page=${page}&size=10`)
      .then((response) => response.data);
  }
  return;
};

export const getProjectStudyPostsApi = (
  categoryId: number,
  page: number,
  currentSort: 'recent' | 'liked' | 'opened',
) => {
  if (currentSort === 'recent') {
    return axiosInstance
      .get(`/projectstudy/list/all/${categoryId}?page=${page}&size=12`)
      .then((response) => response.data);
  }
  if (currentSort === 'opened') {
    return axiosInstance
      .get(`/projectstudy/list/opened/${categoryId}?page=${page}&size=12`)
      .then((response) => response.data);
  }
  if (currentSort === 'liked') {
    return axiosInstance
      .get(`/projectstudy/list/likes/${categoryId}?page=${page}&size=13`)
      .then((response) => response.data);
  }
  return;
};

export const deletePostDataApi = (postId: number) => {
  return axios
    .post(`/posts/delete/${postId}`)
    .then((response) => response.data);
};
export const updatePostDataApi = (postId: number) => {
  return axios
    .post(`/posts/update/${postId}`)
    .then((response) => response.data);
};
