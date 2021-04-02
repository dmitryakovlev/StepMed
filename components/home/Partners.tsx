import { FC } from 'react';
import { IPartnersLogo, partnersLogo } from '@data/partners';

const DashboardBlock: FC<IPartnersLogo> = ({ url, image }) => (
  <a
    href={url}
    className="w-full duration-200 ease-in-out opacity-50 sm:w-2/3 md:w-full hover:opacity-100"
    target="_blank"
  >
    <img src={image} />
  </a>
);

const Partners = () => (
  <>
    <div className="container mt-16 lg:mt-32">
      <h1 className="mb-4 md:mb-6">Полезные ссылки:</h1>
      <p>
        Мы сотрудничаем с лидирующими медицинскими организациями,
        диагностическими центрами, IT-разработчиками и другими компаниями.
      </p>
      <div className="grid grid-cols-2 mt-4 select-none md:mt-8 md:grid-cols-4 gap-y-4 gap-x-6 sm:gap-x-8 lg:gap-x-12">
        {partnersLogo.map((parameters) => (
          <DashboardBlock {...parameters} key={parameters.id} />
        ))}
      </div>
    </div>
  </>
);

export default Partners;
