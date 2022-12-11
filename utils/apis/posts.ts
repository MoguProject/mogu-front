import axios from 'axios';
import { axiosInstance } from 'axiosInstance';

// 비 로그인 시
export const getPostDataApi = (categoryId: number) => {
  return axios
    .get(`http://13.124.27.209:8080/posts/list/${categoryId}?page=0&size=12`)
    .then((response) => response.data);
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
