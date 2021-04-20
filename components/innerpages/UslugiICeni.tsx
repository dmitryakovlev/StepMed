import { FC } from 'react';

import {
  IUslugiICeni,
  uslugiICeniFirst,
  uslugiICeniSecond,
  uslugiICeniThird,
  uslugiICeniFourth,
  uslugiICeniFifth,
  uslugiICeniSixth,
  uslugiICeniSeventh,
  uslugiICeniEighth,
  uslugiICeniNinth,
} from '@data/uslugiICeni';

const PriceContent: FC<IUslugiICeni> = ({ service, price }) => (
  <div className="grid gap-2 p-3 sm:p-4 lg:py-6 lg:gap-6 grid-cols-priceSmall md:grid-cols-price odd:bg-gray-100">
    <p className="text-text-primary">{service}</p>
    <p className="text-right text-primary">{price}</p>
  </div>
);

const PriceBlock: FC<{ title: string }> = ({ children, title }) => (
  <>
    <h2 className="mb-3 sm:mb-4 lg:mb-6 custom-title">{title}</h2>
    <div className="-mx-3 sm:-mx-4 xl:mx-0">
      <div>{children}</div>
    </div>
  </>
);

const UslugiICeni = () => (
  <div className="container">
    <h1>Услуги и цены</h1>

    <PriceBlock title={'01. Консультации'}>
      {uslugiICeniFirst.map((parameters) => (
        <PriceContent {...parameters} key={parameters.id} />
      ))}
    </PriceBlock>

    <PriceBlock title={'02. Манипуляции'}>
      {uslugiICeniSecond.map((parameters) => (
        <PriceContent {...parameters} key={parameters.id} />
      ))}
    </PriceBlock>

    <PriceBlock title={'03. Функциональная диагностика'}>
      {uslugiICeniThird.map((parameters) => (
        <PriceContent {...parameters} key={parameters.id} />
      ))}
    </PriceBlock>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>

    <PriceBlock
      title={
        '04. Магнитно-резонансная томография (без стоимости контрастного вещества)*'
      }
    >
      {uslugiICeniFourth.map((parameters) => (
        <PriceContent {...parameters} key={parameters.id} />
      ))}
    </PriceBlock>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>

    <PriceBlock title={'05. Компьютерная томография*'}>
      {uslugiICeniFifth.map((parameters) => (
        <PriceContent {...parameters} key={parameters.id} />
      ))}
    </PriceBlock>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>

    <PriceBlock title={'06. Радиоизотопная позитронно-эмиссионная томография*'}>
      {uslugiICeniSixth.map((parameters) => (
        <PriceContent {...parameters} key={parameters.id} />
      ))}
    </PriceBlock>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>

    <PriceBlock title={'07. Рентгенодиагностика*'}>
      {uslugiICeniSeventh.map((parameters) => (
        <PriceContent {...parameters} key={parameters.id} />
      ))}
    </PriceBlock>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>

    <PriceBlock title={'08. Ультразвуковая диагностика*'}>
      {uslugiICeniEighth.map((parameters) => (
        <PriceContent {...parameters} key={parameters.id} />
      ))}
    </PriceBlock>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>

    <PriceBlock
      title={'09. Морфологические и молекулярно-генетические исследования*'}
    >
      {uslugiICeniNinth.map((parameters) => (
        <PriceContent {...parameters} key={parameters.id} />
      ))}
    </PriceBlock>
    <p className="custom-text-info">
      * - услуги оказываются партнерами ООО «Степмед клиник»
    </p>
  </div>
);

export default UslugiICeni;
