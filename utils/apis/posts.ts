import axios from 'axios';

// 비 로그인 시
export const getPostDataApi = (categoryId: number) => {
  return axios
    .get(`http://13.124.27.209:8080/posts/list/${categoryId}`)
    .then((response) => response.data);
};
