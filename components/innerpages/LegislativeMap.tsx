import { FC } from 'react';

import {
  ILegislativeMapHead,
  ILegislativeMap,
  legislativeMapHead,
  legislativeMap,
} from '@data/legislativeMap';

const TableHead: FC<ILegislativeMapHead> = ({ heading }) => (
  <div className="custom-table-head-item">{heading}</div>
);

const TableContent: FC<ILegislativeMap> = ({ order, name, date, url }) => (
  <div className="custom-table-cell">
    <div className="custom-table-cell-item">
      <span className="custom-table-cell-heading">№</span>
      <span className="custom-table-cell-text">{order}</span>
    </div>
    <div className="custom-table-cell-item">
      <span className="custom-table-cell-heading">
        Наименование нормативного документа
      </span>
      <span className="custom-table-cell-text">{name}</span>
    </div>
    <div className="custom-table-cell-item">
      <span className="custom-table-cell-heading">Дата издания и номер</span>
      <span className="custom-table-cell-text">{date}</span>
    </div>
    <div className="custom-table-cell-item">
      <span className="custom-table-cell-heading">
        Ссылка в СПС «Консультант Плюс»
      </span>
      <a
        href={url}
        target="_blank"
        className="custom-table-cell-text custom-table-cell-link"
      >
        Нажмите, чтобы перейти
      </a>
    </div>
  </div>
);

const Table = () => (
  <div className="custom-table legislativemap--custom-table">
    <div className="custom-table-head">
      {legislativeMapHead.map((parameters) => (
        <TableHead {...parameters} key={parameters.id} />
      ))}
    </div>
    <div>
      {legislativeMap.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </div>
  </div>
);

const LegislativeMap = () => (
  <div className="container mt-16 md:mt-32">
    <h1 className="mb-10">Законодательная карта</h1>
    <p>
      При осуществлении медицинской деятельности ООО «Степмед Клиник»
      руководствуется принципами профессионализма, гуманизма и законности,
      принимая для этих целей эффективные кадровые и управленческие решения.{' '}
      <br />
      <br />
      Основаниями для работы ООО «Степмед Клиник» служат законодательные акты и
      нормативные документы федерального, регионального и локального значения.
    </p>
    <Table />
  </div>
);

export default LegislativeMap;
