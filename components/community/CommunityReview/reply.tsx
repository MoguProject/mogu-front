import { replyListType } from 'types';
import { CommunityPostReviewBody, CommunityPostReviewHeader } from './styled';
import styled from 'styled-components';

//대댓글 컴포넌트
const Reply = ({ replyList }: { replyList: replyListType }) => {
  return (
    <CommunityPostReplyList>
      <CommunityPostReviewHeader>
        <span> ⌊ userId : {replyList.userId}</span>
      </CommunityPostReviewHeader>
      <CommunityPostReviewBody>
        <p>{replyList.content}</p>
        <span>{replyList.createAt.slice(0, 10)}</span>
      </CommunityPostReviewBody>
    </CommunityPostReplyList>
  );
};

export default Reply;

export const CommunityPostReplyList = styled.div`
  width: 100%;
  margin-top: 5px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.blueLight};
`;
