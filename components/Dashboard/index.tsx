import DashboardBlock from "./dashboard-block";

const dashboardData = [
  {
    id: 0,
    link: "#",
    icon: "/images/icons/registration.png",
    text: "Приём онколога",
  },
  {
    id: 1,
    link: "#",
    icon: "/images/icons/insurance.png",
    text: "Химиотерапия по ОМС",
  },
  {
    id: 2,
    link: "#",
    icon: "/images/icons/price.png",
    text: "Услуги и цены",
  },
  {
    id: 3,
    link: "#",
    icon: "/images/icons/analysis.png",
    text: "Раняя диагностика и скрининг",
  },
  {
    id: 4,
    link: "#",
    icon: "/images/icons/covid.png",
    text: "COVID-19",
  },
  {
    id: 5,
    link: "#",
    icon: "/images/icons/staff.png",
    text: "Наши врачи",
  },
  {
    id: 6,
    link: "#",
    icon: "/images/icons/questions.png",
    text: "Заочная консультация",
  },
  {
    id: 7,
    link: "#",
    icon: "/images/icons/news.png",
    text: "Наши события",
  },
];

const Dashboard = () => (
  <>
    <div className="container dashboard">
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
