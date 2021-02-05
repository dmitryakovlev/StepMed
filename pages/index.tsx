import Layout from '@components/shared/Layout';
import Home from '@components/home';
import RulesOfHospitalization from '@components/innerpages/RulesOfHospitalization';
import LegislativeMap from '@components/innerpages/LegislativeMap';
import SupervisoryAuthority from '@components/innerpages/SupervisoryAuthority';

export default function HomePage() {
  return (
    <>
      <Layout title="Главная">
        <Home />
      </Layout>
    </>
  );
}
