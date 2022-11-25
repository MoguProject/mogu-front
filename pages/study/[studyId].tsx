import { NextPage } from 'next';
import { useRouter } from 'next/router';

const StudyDetailPage: NextPage = () => {
  const router = useRouter();
  const studyId = router.query.studyId;

  // studyId는 백엔드 API로 데이터 요청 시 활용 예정
  return <div></div>;
};

export default StudyDetailPage;
