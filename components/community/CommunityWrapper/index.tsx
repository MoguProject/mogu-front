import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getPostDataApi } from 'utils/apis/posts';
import CommunityPost from '../../common/post/CommunityPost';
import CommunityHeader from '../CommunityHeader';

export const CommunityWrapperWrapper = styled.div`
  max-width: 960px;
  padding: 36px 10px;
  margin: 0 auto;
`;
export interface CommunityPostType {
  content: string;
  categoryName: number;
  id: number;
  title: string;
  likeCount: number;
  view: number;
}

const CommunityWrapper = () => {
  const [page, setPage] = useState(0);

  const query = { categoryId: 1, page: page };

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery({
      queryKey: ['community', query],
      queryFn: () => getPostDataApi(query),
      keepPreviousData: true,
    });
  console.log('data:', data);

  // const getPostData = async () => {
  //   try {
  //     const res = await getPostDataApi(query);
  //     console.log(res);
  //     setPost(res.content);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getPostData();
  // }, [page]);
  // console.log('post:', post);

  const getPostLikedata = async () => {
    try {
      const res = await getPostLikedata();
      console.log('res:', res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommunityWrapperWrapper>
      <CommunityHeader />
      <button onClick={getPostLikedata}>좋아요 순으로 정렬하기</button>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div>
            {data.content.map((item) => (
              <CommunityPost key={item.id} data={item} />
            ))}
          </div>
        )}
        <span>Current Page: {page + 1}</span>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}
        >
          Previous Page
        </button>
        <button
          onClick={() => {
            if (!isPreviousData && data.hasMore) {
              setPage((old) => old + 1);
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPreviousData || !data?.hasMore}
        >
          Next Page
        </button>
        {isFetching ? <span> Loading...</span> : null}
      </div>
    </CommunityWrapperWrapper>
  );
};

export default CommunityWrapper;
