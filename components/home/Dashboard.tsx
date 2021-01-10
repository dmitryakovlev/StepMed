import { FC } from 'react';
import Link from 'next/link';
import { homeDashboard, IHomeDashboard } from '@data/homePage';

const DashboardBlock: FC<IHomeDashboard> = ({ url, icon, text }) => (
  <>
    <Link href={url}>
      <a className="dashboard__block">
        <span className="dashboard__block-icon">{icon}</span>
        <p className="dashboard__block-text">{text}</p>
      </a>
    </Link>
  </>
);

const Dashboard = () => (
  <div className="container mt-16">
    <h1 className="mb-10">Что вас интересует?</h1>
    <div className="dashboard__blocks">
      {homeDashboard.map((dashboard) => (
        <DashboardBlock {...dashboard} key={dashboard.id} />
      ))}
    </div>
  </div>
);

export default Dashboard;
