import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CommunityContentInterface } from 'types';
import { getPostDataApi } from 'utils/apis/posts';
import CommunityPost from '../../../common/post/CommunityPost';

import {
  MainBottomLeftHeader,
  MainBottomLeftMoreButtom,
  MainBottomLeftSelect,
  MainBottomLeftTitle,
  MainBottomLeftWrapper,
} from './styled';

const MainBottomLeft = () => {
  const [categoryId, setCategoryId] = useState(1);
  const [newPost, setNewPost] = useState([]);

  useEffect(() => {
    const getNewPostsData = async () => {
      try {
        const response = await getPostDataApi(categoryId, 0, 'recent');
        console.log(response);
        const newData = response.content.slice(0, 5);
        setNewPost(newData);
      } catch (err) {
        console.log('err:', err);
      }
    };
    getNewPostsData();
  }, [categoryId]);

  return (
    <MainBottomLeftWrapper>
      <MainBottomLeftTitle>커뮤니티 최신글</MainBottomLeftTitle>
      <MainBottomLeftHeader>
        <MainBottomLeftSelect>
          <li>
            <button onClick={() => setCategoryId(1)}>팀 프로젝트</button>
          </li>
          <li>
            <button onClick={() => setCategoryId(2)}>개인 프로젝트</button>
          </li>
          <li>
            <button onClick={() => setCategoryId(3)}>자유로운 글</button>
          </li>
        </MainBottomLeftSelect>
        <MainBottomLeftMoreButtom>
          <Link href="/community">더보기</Link>
        </MainBottomLeftMoreButtom>
      </MainBottomLeftHeader>
      {newPost.map((item: CommunityContentInterface) => (
        <CommunityPost key={item.id} data={item} />
      ))}
    </MainBottomLeftWrapper>
  );
};

export default MainBottomLeft;
