import { axiosInstance } from 'axiosInstance';
import Layout from 'components/Layout';
import CommunityPostRegistrationEdit from 'components/registration/Community/edit';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

const CommunityRegistrationEditPage = () => {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading } = useQuery(['postDetailData', postId], () => {
    return axiosInstance
      .get(`/posts/post/${postId}`)
      .then((response) => response.data);
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Layout>
      <CommunityPostRegistrationEdit data={data} />
    </Layout>
  );
};

export default CommunityRegistrationEditPage;
