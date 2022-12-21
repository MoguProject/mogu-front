import axios from 'axios';
import { axiosInstance } from 'axiosInstance';

// 비 로그인 시
export const getPostDataApi = (
  categoryId: number,
  page: number,
  currentSort: 'recent' | 'liked',
) => {
  if (currentSort === 'recent') {
    return axiosInstance
      .get(`posts/list/${categoryId}?page=${page}&size=10`)
      .then((response) => response.data);
  }
  if (currentSort === 'liked') {
    return axiosInstance
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
  return axiosInstance
    .post(`/posts/delete/${postId}`)
    .then((response) => response.data);
};
export const updatePostDataApi = (postId: number) => {
  return axiosInstance
    .post(`/posts/update/${postId}`)
    .then((response) => response.data);
};

export const getMainPageNewProject = (categoryId: number) => {
  return axiosInstance
    .get(`/projectstudy/list/all/${categoryId}?page=1&size=8`)
    .then((response) => response.data);
};
