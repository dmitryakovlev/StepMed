import { FC } from 'react';

import {
  IPravilaGospitalizaciiHead,
  IPravilaGospitalizacii,
  pravilaGospitalizaciiHead,
  pravilaGospitalizaciiFirst,
  pravilaGospitalizaciiSecond,
  pravilaGospitalizaciiThird,
} from '@data/pravilaGospitalizacii';

const TableHead: FC<IPravilaGospitalizaciiHead> = ({ heading }) => (
  <div className="custom-table-head-item">{heading}</div>
);

const TableContent: FC<IPravilaGospitalizacii> = ({ order, name, date }) => (
  <div className="custom-table-cell">
    <div className="custom-table-cell-item">
      <span className="custom-table-cell-heading">№</span>
      <span className="custom-table-cell-text">{order}</span>
    </div>
    <div className="custom-table-cell-item">
      <span className="custom-table-cell-heading">
        Наименование исследования
      </span>
      <span className="custom-table-cell-text">{name}</span>
    </div>
    <div className="custom-table-cell-item">
      <span className="custom-table-cell-heading">Срок годности</span>
      <span className="custom-table-cell-text custom-table-cell-bold">
        {date}
      </span>
    </div>
  </div>
);

const Table: FC = ({ children }) => (
  <div className="custom-table pravilagospitalizacii--custom-table">
    <div className="custom-table-head">
      {pravilaGospitalizaciiHead.map((parameters) => (
        <TableHead {...parameters} key={parameters.id} />
      ))}
    </div>
    <div>{children}</div>
  </div>
);

const PravilaGospitalizacii = () => (
  <div className="container">
    <h1>Правила госпитализации</h1>
    <p className="custom-text">
      Степмед клиник проводит химиотерапию в условиях дневного стационара, что
      подразумевает краткосрочную госпитализацию, при которой вы находитесь в
      клинике только в дневное время. Большинство схем химиотерапии может быть
      проведено без круглосуточного пребывания в клинике, что никак не
      сказывается на безопасности лечения, но в большинстве случаев положительно
      влияет на эмоциональное состояние пациентов.
    </p>
    <p className="custom-text">
      Как правило, дата госпитализации назначается заранее. Рекомендуем
      прибывать за 15-20 минут до назначенного времени, а в случае опоздания –
      обязательно предупреждать нас по телефону клиники.
    </p>
    <p className="custom-text-message">
      Процесс госпитализации состоит из 2 важных этапов: клинический и
      документальный.
    </p>
    <h2 className="custom-title">Клинический этап</h2>
    <p className="custom-text">
      Клинический этап, включает в себя осмотр лечащим врачом-онкологом, оценка
      жалоб, контроль лабораторных показателей и результатов назначенных
      исследований. Лабораторные анализы сдаются с определенной периодичностью
      для контроля безопасности лечения, поскольку многое могут сказать о
      функционировании органов и систем. Для каждой госпитализации понадобятся
      результаты следующий исследований:
    </p>
    <Table>
      {pravilaGospitalizaciiFirst.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text">
      Для схем, включающих в себя некоторые препараты (трастузумаб, пертузумаб,
      доксорубицин, эпирубицин, трастузумаб эмтанзин) понадобится выполнение
      <b className="ml-1">дополнительных</b> биохимических исследований:
    </p>
    <Table>
      {pravilaGospitalizaciiSecond.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text">
      Для схем, включающих в себя иммунотерапию (ниволумаб, пембролизумаб,
      ипилимумаб, атезолизумаб, пролголимаб) понадобится выполнение
      <b className="ml-1">дополнительных</b> биохимических исследований:
    </p>
    <Table>
      {pravilaGospitalizaciiThird.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </Table>
    <p className="custom-text">
      Указанные анализы позволят оценить безопасность запланированного лечения,
      а также, при необходимости, скорректировать дозировки препаратов либо
      назначить дополнительную сопроводительную терапию.
    </p>
    <h2 className="custom-title">Документальный этап</h2>
    <div className="custom-list">
      <p className="custom-list-heading">
        Второй этап госпитализации состоит из документальной части, которая
        включает в себя:
      </p>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Идентификация пациента (проверка паспорта).</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Подписание согласия на обработку персональных данных.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Проверка документов ОМС (полис ОМС и СНИЛС), запрос информации в
          страховой компании либо фонде обязательного медицинского страхования.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Проверка направления (соответствие форме 057/у-04, наличие всех
          необходимых отметок и подписей).
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Оформление истории болезни (медицинской карты пациента, получающего
          медицинскую помощь в условиях стационара):
          <br /> - ознакомление с правилами пребывания в СтепМед Клиник;
          <br /> - подписание информированных добровольных согласий на
          медицинское вмешательство и проведение запланированного лечения.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Оформление листка нетрудоспособности (если требуется).</p>
      </div>
    </div>
  </div>
);

export default PravilaGospitalizacii;
