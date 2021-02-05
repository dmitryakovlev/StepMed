import { FC } from 'react';

import {
  IServicesAndPricesHead,
  IServicesAndPrices,
  rulesOfHospitalizationHead,
  servicesAndPricesFirst,
  servicesAndPricesSecond,
  servicesAndPricesThird,
  servicesAndPricesFourth,
  servicesAndPricesFifth,
  servicesAndPricesNinth,
  servicesAndPricesTenth,
} from '@data/servicesAndPrices';

const TableHead: FC<IServicesAndPricesHead> = ({ heading }) => (
  <div className="custom-table-head-item">{heading}</div>
);

const TableContent: FC<IServicesAndPrices> = ({ code, service, price }) => (
  <div className="custom-table-cell">
    <div className="custom-table-cell-item">
      <span className="custom-table-cell-heading">Код услуги</span>
      <span className="custom-table-cell-text">{code}</span>
    </div>
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

const Table: FC = ({ children }) => (
  <div className="custom-table servicesandprices--custom-table">
    <div className="custom-table-head">
      {rulesOfHospitalizationHead.map((parameters) => (
        <TableHead {...parameters} key={parameters.id} />
      ))}
    </div>
    <div>{children}</div>
  </div>
);

const ServicesAndPrices = () => (
  <div className="container mt-16 md:mt-32">
    <h1 className="mb-10">Услуги и цены</h1>
    <h3 className="custom-title">
      01. Магнитно-резонансная томография (без стоимости контрастного вещества)*
    </h3>
    <Table>
      {servicesAndPricesFirst.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>
    <h3 className="custom-title">02. Компьютерная томография*</h3>
    <Table>
      {servicesAndPricesSecond.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>
    <h3 className="custom-title">
      03. Радиоизотопная позитронно-эмиссионная томография*
    </h3>
    <Table>
      {servicesAndPricesThird.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>
    <h3 className="custom-title">04. Рентгенодиагностика*</h3>
    <Table>
      {servicesAndPricesFourth.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>
    <h3 className="custom-title">05. Ультразвуковая диагностика*</h3>
    <Table>
      {servicesAndPricesFifth.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>
    <h3 className="custom-title">09. Патологическая анатомия*</h3>
    <Table>
      {servicesAndPricesNinth.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>
    <h3 className="custom-title">10. Иммуногистохимия*</h3>
    <Table>
      {servicesAndPricesTenth.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>
  </div>
);

export default ServicesAndPrices;
