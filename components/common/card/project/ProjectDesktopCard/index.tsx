import styled from 'styled-components';
import Image from 'next/image';
import CardTags from '../../../CardTags';
import CardState from '../../../CardState';

import {
  ProjectDesktopCardWrapper,
  TagsWrapper,
  ProjectDesktopCardTitle,
  ProjectDesktopCardFooter,
  TotalUser,
  ProjectDesktopCardLikeText,
  ProjectDesktopCardLike,
} from './styled';
import { ProjectStudyContentInterface } from 'types';

const ProjectDesktopImageWrapper = styled.div`
  width: 100%;
  height: 152px;
  position: relative;

  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

const ProjectDesktopCard = ({
  data,
  main,
}: {
  data: ProjectStudyContentInterface;
  main?: boolean;
}) => {
  console.log('mainProjectData', data);
  return (
    <ProjectDesktopCardWrapper main={main}>
      <ProjectDesktopImageWrapper>
        <Image
          src={data.mainImage}
          alt={'프로젝트 카드 이미지'}
          layout="fill"
          objectFit="fill"
        />
      </ProjectDesktopImageWrapper>
      <TagsWrapper>
        {/* {data.postSkills.map((category) => (
          <CardTags tag={category.skillName} key={category.id} />
        ))} */}
        <CardState state={data.openStatus} />
      </TagsWrapper>
      <ProjectDesktopCardTitle>{data.title}</ProjectDesktopCardTitle>
      <ProjectDesktopCardFooter>
        <TotalUser>모집인원 {data.memberCount}</TotalUser>
        <ProjectDesktopCardLike>
          <Image
            src={'/images/icon/heart_active.svg'}
            alt={'like'}
            width={15}
            height={13.76}
          />
          <ProjectDesktopCardLikeText>
            {data.likeCount}
          </ProjectDesktopCardLikeText>
        </ProjectDesktopCardLike>
      </ProjectDesktopCardFooter>
    </ProjectDesktopCardWrapper>
  );
};

export default ProjectDesktopCard;
