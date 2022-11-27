import Image from 'next/image';

import {
  StudyPostCategory,
  StudyPostFooter,
  StudyPostLike,
  StudyPostSummary,
  StudyPostTitle,
  StudyPostUser,
  StudyPostWrapper,
} from './styled';

const StudyPost = () => {
  return (
    <StudyPostWrapper>
      <StudyPostCategory>프론트엔드 자바스크립트 / 웹개발</StudyPostCategory>
      <StudyPostTitle>자바스크립트 딥다이브 스터디 모집합니다.</StudyPostTitle>
      <StudyPostSummary>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been dasbdhjasdbkashbdkjasbdkjasbdjkas
      </StudyPostSummary>
      <StudyPostFooter>
        <StudyPostUser>모집인원 2 / 4</StudyPostUser>
        <StudyPostLike>
          <Image
            src={'/images/icon/heart_active.svg'}
            alt={'좋아요'}
            width={16}
            height={14}
          />
          <span>20</span>
        </StudyPostLike>
      </StudyPostFooter>
    </StudyPostWrapper>
  );
};

export default StudyPost;
