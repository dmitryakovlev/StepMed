import DashboardBlock from "./DashboardBlock";
import RegistrationIcon from "../Icons/RegistrationIcon";
import InsuranceIcon from "../Icons/InsuranceIcon";
import PriceIcon from "../Icons/PriceIcon";
import AnalysisIcon from "../Icons/AnalysisIcon";
import CovidIcon from "../Icons/CovidIcon";
import StaffIcon from "../Icons/StaffIcon";
import QuestionsIcon from "../Icons/QuestionsIcon";
import NewsIcon from "../Icons/NewsIcon";

const dashboardData: Array<{
  id: number;
  link: string;
  icon: JSX.Element;
  text: string;
}> = [
  {
    id: 0,
    link: "#",
    icon: <RegistrationIcon />,
    text: "Приём онколога",
  },
  {
    id: 1,
    link: "#",
    icon: <InsuranceIcon />,
    text: "Химиотерапия по ОМС",
  },
  {
    id: 2,
    link: "#",
    icon: <PriceIcon />,
    text: "Услуги и цены",
  },
  {
    id: 3,
    link: "#",
    icon: <AnalysisIcon />,
    text: "Раняя диагностика и скрининг",
  },
  {
    id: 4,
    link: "#",
    icon: <CovidIcon />,
    text: "COVID-19",
  },
  {
    id: 5,
    link: "#",
    icon: <StaffIcon />,
    text: "Наши врачи",
  },
  {
    id: 6,
    link: "#",
    icon: <QuestionsIcon />,
    text: "Заочная консультация",
  },
  {
    id: 7,
    link: "#",
    icon: <NewsIcon />,
    text: "Наши события",
  },
];

const Dashboard = () => (
  <>
    <div className="container mt-16">
      <h1 className="mb-10">Что вас интересует?</h1>
      <div className="dashboard__blocks">
        {dashboardData.map((dashboard) => (
          <DashboardBlock
            link={dashboard.link}
            icon={dashboard.icon}
            text={dashboard.text}
            key={dashboard.id}
          />
        ))}
      </div>
    </div>
  </>
);

export default Dashboard;
