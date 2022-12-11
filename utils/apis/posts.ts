import axios from 'axios';
import { axiosInstance } from 'axiosInstance';

type dataType = {
  categoryId: number;
  page: number;
};

// 비 로그인 시
export const getPostDataApi = (data: dataType) => {
  return axios
    .get(
      `http://13.124.27.209:8080/posts/list/${data.categoryId}?pageNumber=${data.page}`,
    )
    .then((response) => response.data);
};

export const getPostLikeDataApi = (data: dataType) => {
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
