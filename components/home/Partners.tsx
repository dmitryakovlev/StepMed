import { FC } from 'react';
import { IPartnersLogo, partnersLogo } from '@data/partners';

const DashboardBlock: FC<IPartnersLogo> = ({ url, image }) => (
  <a href={url} className="partners__logo" target="_blank">
    <img src={image} />
  </a>
);

const Partners = () => (
  <>
    <div className="container mt-16 md:mt-32">
      <h1 className="mb-5">Полезные ссылки.</h1>
      <p>
        Мы сотрудничаем с лидирующими медицинскими организациями,
        диагностическими центрами, IT-разработчиками и другими компаниями.
      </p>
      <div className="partners__block">
        {partnersLogo.map((parameters) => (
          <DashboardBlock {...parameters} key={parameters.id} />
        ))}
      </div>
    </div>
  </>
);

export default Partners;
