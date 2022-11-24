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

const StudyDesktopCard = ({
  state,
  likeState,
}: {
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
        <StudyCardSubTitle>프론트엔드 자바스크립트 / 웹 개발</StudyCardSubTitle>
        <StudyCardTitle>
          자바스크립트 딥다이브 스터디 모집합니다.
        </StudyCardTitle>
        <StudyCardContents>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been ...
        </StudyCardContents>
        <StudyCardMemberNum>모집인원 2/4</StudyCardMemberNum>
      </StudyCardBottom>
    </StudyCardWrapper>
  );
};

export default StudyDesktopCard;
