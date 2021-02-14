import { FC } from 'react';

import {
  IUslugiICeniHead,
  IUslugiICeni,
  uslugiICeniHead,
  uslugiICeniFirst,
  uslugiICeniSecond,
  uslugiICeniThird,
  uslugiICeniFourth,
  uslugiICeniFifth,
  uslugiICeniSixth,
  uslugiICeniSeventh,
  uslugiICeniEighth,
  uslugiICeniNinth,
  uslugiICeniTenth,
} from '@data/uslugiICeni';

const TableHead: FC<IUslugiICeniHead> = ({ heading }) => (
  <div className="custom-table-head-item">{heading}</div>
);

const TableContent: FC<IUslugiICeni> = ({ code, service, price }) => {
  let ifHasCode;

  if (code) {
    ifHasCode = (
      <div className="custom-table-cell-item">
        <span className="custom-table-cell-heading">Код услуги</span>
        <span className="custom-table-cell-text">{code}</span>
      </div>
    );
  } else {
    ifHasCode = <div className="custom-table-cell-empty"></div>;
  }

  return (
    <div className="custom-table-cell">
      {ifHasCode}
      <div className="custom-table-cell-item">
        <span className="custom-table-cell-heading">
          Наименование медицинской услуги
        </span>
        <span className="custom-table-cell-text">{service}</span>
      </div>
      <div className="custom-table-cell-item">
        <span className="custom-table-cell-heading">Стоимость услуги (₽)</span>
        <span className="custom-table-cell-text custom-table-cell-bold">
          {price}
        </span>
      </div>
    </div>
  );
};

const Table: FC = ({ children }) => (
  <div className="custom-table uslugiiceni--custom-table">
    <div className="custom-table-head">
      {uslugiICeniHead.map((parameters) => (
        <TableHead {...parameters} key={parameters.id} />
      ))}
    </div>
    <div>{children}</div>
  </div>
);

const UslugiICeni = () => (
  <div className="container mt-16 md:mt-32">
    <h1 className="mb-10">Услуги и цены</h1>

    <h3 className="custom-title">01. Консультации</h3>
    <Table>
      {uslugiICeniFirst.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>

    <h3 className="custom-title">02. Манипуляции</h3>
    <Table>
      {uslugiICeniSecond.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>

    <h3 className="custom-title">03. Функциональная диагностика</h3>
    <Table>
      {uslugiICeniThird.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>

    <h3 className="custom-title">
      04. Магнитно-резонансная томография (без стоимости контрастного вещества)*
    </h3>
    <Table>
      {uslugiICeniFourth.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>

    <h3 className="custom-title">05. Компьютерная томография*</h3>
    <Table>
      {uslugiICeniFifth.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>

    <h3 className="custom-title">
      06. Радиоизотопная позитронно-эмиссионная томография*
    </h3>
    <Table>
      {uslugiICeniSixth.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>

    <h3 className="custom-title">07. Рентгенодиагностика*</h3>
    <Table>
      {uslugiICeniSeventh.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>

    <h3 className="custom-title">08. Ультразвуковая диагностика*</h3>
    <Table>
      {uslugiICeniFifth.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>

    <h3 className="custom-title">09. Патологическая анатомия*</h3>
    <Table>
      {uslugiICeniNinth.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>

    <h3 className="custom-title">10. Иммуногистохимия*</h3>
    <Table>
      {uslugiICeniTenth.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>
  </div>
);

export default UslugiICeni;
