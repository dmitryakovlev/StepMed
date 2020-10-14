import { FC } from "react";

const DashboardBlock: FC<{ logo: any }> = (logo) => (
  <>
    <span className="partners__block-logo">{logo}</span>
  </>
);

const Partners = () => (
  <>
    <div className="container mt-32">
      <h1 className="mb-5">Наши партнёры.</h1>
      <p>
        Мы сотрудничаем с лидирующими медицинскими организациями,
        диагностическими центрами, IT-разработчиками и другими компаниями.
      </p>
      <div className="partners__block"></div>
    </div>
  </>
);

export default Partners;
