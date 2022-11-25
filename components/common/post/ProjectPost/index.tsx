import Image from 'next/image';

import {
  ProjectPostFooter,
  ProjectPostIcon,
  ProjectPostIconWrapper,
  ProjectPostLeft,
  ProjectPostRight,
  ProjectPostTags,
  ProjectPostTitle,
  ProjectPostUser,
  ProjectPostWrapper,
} from './styled';

const ProjectPost = () => {
  return (
    <ProjectPostWrapper>
      <ProjectPostLeft>
        <Image
          src={'/images/dummy_image.png'}
          alt={'프로젝트 이미지'}
          width={100}
          height={100}
        />
      </ProjectPostLeft>
      <ProjectPostRight>
        <ProjectPostTags>
          #React #TypeScript #MySQL #NodeJs #Spring
        </ProjectPostTags>
        <ProjectPostTitle>
          React + Spring 스터디 / 프로젝트 모집 dasdsadasdsad
        </ProjectPostTitle>
        <ProjectPostFooter>
          <ProjectPostUser>모집인원 2 / 4</ProjectPostUser>
          <ProjectPostIconWrapper>
            <ProjectPostIcon>
              <Image
                src={'/images/icon/heart_active.svg'}
                alt={'좋아요'}
                width={16}
                height={14}
              />
              <span>20</span>
            </ProjectPostIcon>
            <ProjectPostIcon>
              <Image
                src={'/images/icon/eye.svg'}
                alt={'조회수'}
                width={15}
                height={13}
              />
              <span>132</span>
            </ProjectPostIcon>
          </ProjectPostIconWrapper>
        </ProjectPostFooter>
      </ProjectPostRight>
    </ProjectPostWrapper>
  );
};

export default ProjectPost;
