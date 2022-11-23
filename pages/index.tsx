import { NextPage } from 'next';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import CardState from '../components/common/CardState';
import CardTags from '../components/common/CardTags';
import Image from 'next/image';
import StudyDesktopCard from '../components/common/card/study/StudyDesktopCard';
import ProjectMobileCard from '../components/common/card/project/ProjectMobileCard/ProjectMobileCard';

export interface ProjectDummyData {
  title: string;
  categories: string[];
  state: boolean;
  totalUser: number;
  currentUser: number;
  like: number;
  imgUrl: string;
}

const Home: NextPage = () => {
  const ProjectDummyData: ProjectDummyData = {
    title: 'React + Spring 스터디 / 프로젝트 모집 사이트 같이 만드실분',
    categories: ['React', 'Typescript', 'MySQL', 'NodeJs', 'Spring'],
    state: true,
    totalUser: 4,
    currentUser: 2,
    like: 20,
    imgUrl: '/images/dummy_image.png',
  };
  return (
    <>
      <Header />
      <div>메인페이지 입니다.</div>
      <Footer />
      <CardState state={true}></CardState>
      <CardState state={false}></CardState>
      <CardTags tag={'React'} />
      <CardTags tag={'TypeScript'} />
      <Image
        src={'/images/icon/heart.svg'}
        alt="heart"
        width={24}
        height={24}
      />
      <Image
        src={'/images/icon/heart_active.svg'}
        alt="heart"
        width={24}
        height={24}
      />
      <StudyDesktopCard state={true} likeState={true} />
      {/* <ProjectDesktopCard data={ProjectDummyData} /> */}
      <ProjectMobileCard data={ProjectDummyData} />
    </>
  );
};

export default Home;
