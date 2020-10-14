const DashboardBlock = ({ link, icon, text }) => (
  <>
    <a className="dashboard__block" href={link}>
      <span className="dashboard__block-icon">{icon}</span>
      <p className="dashboard__block-text">{text}</p>
    </a>
  </>
);

export default DashboardBlock;
