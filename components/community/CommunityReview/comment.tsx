import { ReplyListType } from 'types';
import Reply from './reply';
import {
  CommunityPostReviewBody,
  CommunityPostReviewHeader,
  CommunityPostReviewList,
} from './styled';
import styled from 'styled-components';
import { ChangeEvent, useCallback, useState } from 'react';
import { axiosInstance } from 'axiosInstance';

// 댓글 컴포넌트
const CommunityPostReview = ({ replyList }: { replyList: ReplyListType }) => {
  console.log('replyList:', replyList);
  const [openReply, setOpenReply] = useState(false);
  const [replyValue, setReplyValue] = useState('');

  const onChangeReplyValue = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setReplyValue(e.target.value);
    },
    [],
  );

  const onClickReplySubmitButton = () => {
    axiosInstance.post('/posts/reply/create/sub', {
      replyId: replyList.id,
      content: replyValue,
    });
  };

  return (
    <>
      <CommunityPostReviewList>
        <CommunityPostReviewHeader>
          <span>{replyList.userNickname}</span>
          <div>{replyList.createAt.slice(0, 10)}</div>
        </CommunityPostReviewHeader>
        <CommunityPostReviewBody>
          <span>{replyList.content}</span>
          <button onClick={() => setOpenReply(!openReply)}>
            {openReply ? '답글 닫기' : '답글 열기'}
          </button>
        </CommunityPostReviewBody>
      </CommunityPostReviewList>
      {openReply && (
        <>
          <ReplyInputWrapper>
            <ReplyInput
              placeholder="답글을 입력해 주세요."
              value={replyValue}
              onChange={onChangeReplyValue}
            />
            <ReplyButton type="button" onClick={onClickReplySubmitButton}>
              답글 입력
            </ReplyButton>
          </ReplyInputWrapper>
          <ReplyWrapper>
            {replyList.children.length !== 0 &&
              replyList.children.map((item: ReplyListType) => (
                <Reply replyList={item} />
              ))}
          </ReplyWrapper>
        </>
      )}
    </>
  );
};

export default CommunityPostReview;

const ReplyWrapper = styled.div`
  position: relative;
  left: 20px;
`;

const ReplyInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  max-width: 960px;
  margin: 0 auto;
`;

const ReplyInput = styled.textarea`
  width: 100%;
  padding: 12px 8px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  resize: none;

  :focus {
    outline: 1px solid ${(props) => props.theme.colors.green};
  }
`;

const ReplyButton = styled.button`
  padding: 8px 12px;
  color: ${(props) => props.theme.colors.primary};
  margin-top: 8px;
  transition: all 0.2s ease-in-out;
  :hover {
    color: ${(props) => props.theme.colors.green};
  }
`;
