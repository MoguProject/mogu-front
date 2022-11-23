import { NextPage } from 'next';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import CardState from '../components/common/CardState';
import CardTags from '../components/common/CardTags';
import Image from 'next/image';
import StudyDesktopCard from '../components/common/card/study/StudyDesktopCard';

const Home: NextPage = () => {
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
    </>
  );
};

export default Home;
