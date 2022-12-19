import { ReplyListType } from 'types';
import { CommunityPostReviewBody, CommunityPostReviewHeader } from './styled';
import styled from 'styled-components';

//대댓글 컴포넌트
const Reply = ({ replyList }: { replyList: ReplyListType }) => {
  return (
    <CommunityPostReplyList>
      <CommunityPostReviewHeader>
        <span>{replyList.userNickname}</span>
        <div>{replyList.createAt.slice(0, 10)}</div>
      </CommunityPostReviewHeader>
      <CommunityPostReviewBody>
        <p>{replyList.content}</p>
      </CommunityPostReviewBody>
    </CommunityPostReplyList>
  );
};

export default Reply;

export const CommunityPostReplyList = styled.div`
  width: 100%;
  margin-top: 5px;
  padding: 10px;
`;
