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
      <div className="custom-block-item">
        <span className="custom-block-item-heading">Электронная почта</span>
        <span className="custom-block-item-text">{email}</span>
      </div>
    );
  }

  return (
    <div className="custom-block">
      <img className="custom-block-img" src={img} />
      <div className="custom-block-container">
        <h1 className="custom-block-name">{name}</h1>
        <div className="mb-5 custom-block-item">
          <span className="custom-block-item-heading">Адрес</span>
          <span className="custom-block-item-text">{address}</span>
        </div>
        <div className="custom-clock-grid">
          <div className="custom-block-item">
            <span className="custom-block-item-heading">Сайт</span>
            <a href={url} className="custom-block-item-link" target="_blank">
              {url}
            </a>
          </div>
          <div className="custom-block-item">
            <span className="custom-block-item-heading">Телефон</span>
            <span className="custom-block-item-text">{phone}</span>
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
  <div className="container mt-16 md:mt-32">
    <h1 className="mb-10">Контрольно-надзорные органы</h1>
    <BlockList />
  </div>
);

export default NadzornieOrgani;
