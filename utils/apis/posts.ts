import axios from 'axios';

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
    .get(
      `http://13.124.27.209:8080/posts/list/likes/${data.categoryId}?pageNumber=${data.page}`,
    )
    .then((response) => response.data);
};
