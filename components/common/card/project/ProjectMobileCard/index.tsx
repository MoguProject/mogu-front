import Image from 'next/image';
import CardState from '../../../CardState';
import CardTags from '../../../CardTags';

import {
  ProjectMobileCardHeader,
  ProjectMobilCardWrapper,
  ProjectMobileCardImageWrapper,
  ProjectMobileCardTitle,
  TagsWrapper,
  TotalUser,
} from './styled';

const ProjectMobileCard = ({ data }: { data: any }) => {
  return (
    <ProjectMobilCardWrapper>
      <ProjectMobileCardHeader>
        <CardState state={data.state} />
        <Image
          src={'/images/icon/heart.svg'}
          alt={'like'}
          width={20}
          height={18}
        />
      </ProjectMobileCardHeader>
      <ProjectMobileCardImageWrapper>
        <Image
          src={data.imgUrl}
          alt={'프로젝트 카드'}
          width={230}
          height={159}
        />
      </ProjectMobileCardImageWrapper>
      <ProjectMobileCardTitle>{data.title}</ProjectMobileCardTitle>
      <TagsWrapper>
        {data.categories.length > 2
          ? data.categories
              .slice(0, 3)
              .map((category: any) => (
                <CardTags tag={category} key={category} />
              ))
          : data.categories.map((category: any) => (
              <CardTags tag={category} key={category} />
            ))}
      </TagsWrapper>
      <TotalUser>
        모집인원 {data.currentUser} / {data.totalUser}
      </TotalUser>
    </ProjectMobilCardWrapper>
  );
};

export default ProjectMobileCard;
