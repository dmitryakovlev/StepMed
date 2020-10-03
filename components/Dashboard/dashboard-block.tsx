const DashboardBlock = ({ link, icon, text }) => (
  <>
    <a className="dashboard__block" href={link}>
      <img className="dashboard__block-icon" src={icon} alt={text} />
      <p className="dashboard__block-text">{text}</p>
    </a>
  </>
);

export default DashboardBlock;
