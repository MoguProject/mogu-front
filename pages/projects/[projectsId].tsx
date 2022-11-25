import { NextPage } from 'next';
import { useRouter } from 'next/router';

const ProjectsDetailPage: NextPage = () => {
  const router = useRouter();
  const projectsId = router.query.projectsId;

  // projectsId는 백엔드 API로 데이터 요청 시 활용 예정

  return <div></div>;
};

export default ProjectsDetailPage;
