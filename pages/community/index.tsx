import Pagination from '../../components/common/Pagination';
import CommunityWrapper from '../../components/community/CommunityWrapper';
import Layout from '../../components/Layout';

const CommunityPage = () => {
  return (
    <Layout>
      <CommunityWrapper />
      <Pagination />
    </Layout>
  );
};

export default CommunityPage;
