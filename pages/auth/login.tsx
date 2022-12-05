import { GetServerSidePropsContext } from 'next';
import LoginWrapper from '../../components/auth/Login';
import Layout from '../../components/Layout';

const login = () => {
  return (
    <Layout>
      <LoginWrapper></LoginWrapper>
    </Layout>
  );
};

export default login;

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  if (context.req && cookie) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }
  return {
    props: {},
  };
};
