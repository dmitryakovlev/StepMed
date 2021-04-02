import { FC } from 'react';

import { INadzornieOrgani, nadzornieOrgani } from '@data/nadzornieOrgani';

const Block: FC<INadzornieOrgani> = ({
  img,
  name,
  address,
  url,
  phone,
  email,
}) => {
  let ifHasEmail;

  if (email) {
    ifHasEmail = (
      <div className="flex flex-col">
        <span className="mb-2 text-sm text-gray-400 select-none">
          Электронная почта
        </span>
        <span className="text-base text-text-primary">{email}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full py-6 border-b-2 border-gray-100 md:flex-row xl:py-12 last:border-none">
      <img className="w-[9.375rem] h-[9.375rem]" src={img} />
      <div className="w-full mt-4 md:mt-0 md:ml-8 xl:ml-12">
        <p className="font-bold">{name}</p>
        <div className="flex flex-col my-4 xl:my-6">
          <span className="mb-2 text-sm text-gray-400 select-none">Адрес</span>
          <span className="text-base text-text-primary">{address}</span>
        </div>
        <div className="grid grid-cols-1 gap-4 xl:gap-6 xl:grid-cols-3">
          <div className="flex flex-col">
            <span className="mb-2 text-sm text-gray-400 select-none">Сайт</span>
            <a
              href={url}
              className="text-base text-primary hover:underline"
              target="_blank"
            >
              {url}
            </a>
          </div>
          <div className="flex flex-col">
            <span className="mb-2 text-sm text-gray-400 select-none">
              Телефон
            </span>
            <span className="text-base text-text-primary">{phone}</span>
          </div>
          {ifHasEmail}
        </div>
      </div>
    </div>
  );
};

const BlockList = () => (
  <div className="flex flex-col">
    {nadzornieOrgani.map((parameters) => (
      <Block {...parameters} key={parameters.id} />
    ))}
  </div>
);

const NadzornieOrgani = () => (
  <div className="container">
    <h1>Контрольно-надзорные органы</h1>
    <BlockList />
  </div>
);

export default NadzornieOrgani;
