import React from 'react';
import CardState from '../../CardState';
import Image from 'next/image';
import {
  StudyCardWrapper,
  StudyCardTop,
  StudyCardBottom,
  StudyCardSubTitle,
  StudyCardTitle,
  StudyCardContents,
  StudyCardMemberNum,
} from './styled';

const StudyCard = ({
  state,
  likeState,
  data,
}: {
  data: any;
  state: boolean;
  likeState: boolean;
}) => {
  return (
    <StudyCardWrapper>
      <StudyCardTop>
        <CardState state={state} />
        {likeState ? (
          <Image
            src={'/images/icon/heart_active.svg'}
            alt="heart"
            width={20}
            height={18}
          />
        ) : (
          <Image
            src={'/images/icon/heart.svg'}
            alt="heart"
            width={20}
            height={18}
          />
        )}
      </StudyCardTop>
      <StudyCardBottom>
        <StudyCardSubTitle>{data.subTitle}</StudyCardSubTitle>
        <StudyCardTitle>{data.title}</StudyCardTitle>
        <StudyCardContents>{data.content}</StudyCardContents>
        <StudyCardMemberNum>
          {`모집인원 ${data.currentUser}/${data.totalUser}`}
        </StudyCardMemberNum>
      </StudyCardBottom>
    </StudyCardWrapper>
  );
};

export default StudyCard;
