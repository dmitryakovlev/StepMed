import { FC } from "react";
import { homeDashboard, HomeDashboard } from "@data";

const DashboardBlock: FC<HomeDashboard> = (dashboard) => (
  <>
    <a className="dashboard__block" href={dashboard.link}>
      <span className="dashboard__block-icon">{dashboard.icon}</span>
      <p className="dashboard__block-text">{dashboard.text}</p>
    </a>
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
