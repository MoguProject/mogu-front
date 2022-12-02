import { NextPage } from 'next';
import Signup from '../../components/auth/Signup';
import Layout from '../../components/Layout';

const signup: NextPage = () => {
  return (
    <Layout>
      <Signup />
    </Layout>
  );
};

export default signup;
