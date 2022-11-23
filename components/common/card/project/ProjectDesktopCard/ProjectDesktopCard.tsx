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

import type { ProjectDummyData } from '../../../../../pages';

const ProjectDesktopCard = ({ data }: { data: ProjectDummyData }) => {
  return (
    <ProjectDesktopCardWrapper>
      <Image
        src={data.imgUrl}
        alt={'프로젝트 카드 이미지'}
        width={220}
        height={152}
      />
      <TagsWrapper>
        {data.categories.map((category) => (
          <CardTags tag={category} />
        ))}
        <CardState state={data.state} />
      </TagsWrapper>
      <ProjectDesktopCardTitle>{data.title}</ProjectDesktopCardTitle>
      <ProjectDesktopCardFooter>
        <TotalUser>
          모집인원 {data.currentUser} / {data.totalUser}
        </TotalUser>
        <ProjectDesktopCardLike>
          <Image
            src={'/images/icon/heart_active.svg'}
            alt={'like'}
            width={15}
            height={13.76}
          />
          <ProjectDesktopCardLikeText>{data.like}</ProjectDesktopCardLikeText>
        </ProjectDesktopCardLike>
      </ProjectDesktopCardFooter>
    </ProjectDesktopCardWrapper>
  );
};

export default ProjectDesktopCard;
