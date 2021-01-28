import { FC } from 'react';

import {
  ISupervisoryAuthority,
  supervisoryAuthority,
} from '@data/supervisoryAuthority';

const Block: FC<ISupervisoryAuthority> = ({
  img,
  name,
  address,
  url,
  phone,
  email,
}) => (
  <div className="">
    <img src={img} />
    <div>
      <h1>{name}</h1>
      <div>
        <span>Адрес</span>
        <span>{address}</span>
      </div>
      <div>
        <div>
          <span>Сайт</span>
          <a href={url} target="_blank">
            {url}
          </a>
        </div>
        <div>
          <span>Телефон</span>
          <span>{phone}</span>
        </div>
        <div>
          <span>Электронная почта</span>
          <span>{email}</span>
        </div>
      </div>
    </div>
  </div>
);

const BlockList = () => (
  <div className="flex flex-col">
    {supervisoryAuthority.map((parameters) => (
      <Block {...parameters} key={parameters.id} />
    ))}
  </div>
);

const LegislativeMap = () => (
  <div className="container mt-16 md:mt-32">
    <h1 className="mb-10">Надзорные органы</h1>
    <BlockList />
  </div>
);

export default LegislativeMap;
