import { replyListType } from 'types';
import Reply from './reply';
import {
  CommunityPostReviewBody,
  CommunityPostReviewHeader,
  CommunityPostReviewList,
} from './styled';
import styled from 'styled-components';
import { useState } from 'react';

// 댓글 컴포넌트
const CommunityPostReview = ({ replyList }: { replyList: replyListType }) => {
  console.log('replyList:', replyList);
  const [openReply, setOpenReply] = useState(false);

  return (
    <>
      <CommunityPostReviewList>
        <CommunityPostReviewHeader>
          <span>userId : {replyList.userId}</span>
        </CommunityPostReviewHeader>
        <CommunityPostReviewBody>
          <p>{replyList.content}</p>
          <span>{replyList.createAt.slice(0, 10)}</span>
          <button onClick={() => setOpenReply(!openReply)}>더보기</button>
        </CommunityPostReviewBody>
      </CommunityPostReviewList>
      {openReply && (
        <ReplyWrapper>
          {replyList.children.length !== 0 &&
            replyList.children
              .reverse()
              .map((item: replyListType) => <Reply replyList={item} />)}
        </ReplyWrapper>
      )}
    </>
  );
};

export default CommunityPostReview;

const ReplyWrapper = styled.div`
  position: relative;
  left: 20px;
`;
