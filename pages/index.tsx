import Layout from '@components/shared/Layout';
import Home from '@components/home';
import SupervisoryAuthority from '@components/innerpages/SupervisoryAuthority';

export default function HomePage() {
  return (
    <>
      <Layout title="Главная">
        <SupervisoryAuthority />
      </Layout>
    </>
  );
}
