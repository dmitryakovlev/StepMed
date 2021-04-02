import { FC } from 'react';

import {
  IZakonodatelnayaKartaHead,
  IZakonodatelnayaKarta,
  zakonodatelnayaKartaHead,
  zakonodatelnayaKarta,
} from '@data/zakonodatelnayaKarta';

const TableHead: FC<IZakonodatelnayaKartaHead> = ({ heading }) => (
  <div className="custom-table-head-item">{heading}</div>
);

const TableContent: FC<IZakonodatelnayaKarta> = ({
  order,
  name,
  date,
  url,
}) => (
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
      <span className="custom-table-cell-heading">Ссылка на документ</span>
      <a
        href={url}
        target="_blank"
        className="custom-table-cell-text custom-table-cell-link"
      >
        Нажмите, чтобы открыть
      </a>
    </div>
  </div>
);

const Table = () => (
  <div className="custom-table zakonodatelnayakarta--custom-table">
    <div className="custom-table-head">
      {zakonodatelnayaKartaHead.map((parameters) => (
        <TableHead {...parameters} key={parameters.id} />
      ))}
    </div>
    <div>
      {zakonodatelnayaKarta.map((parameters) => (
        <TableContent {...parameters} key={parameters.id} />
      ))}
    </div>
  </div>
);

const ZakonodatelnayaKarta = () => (
  <div className="container">
    <h1>Законодательная карта</h1>
    <p className="custom-text">
      При осуществлении медицинской деятельности ООО «Степмед Клиник»
      руководствуется принципами профессионализма, гуманизма и законности,
      принимая для этих целей эффективные кадровые и управленческие решения.
    </p>
    <p className="custom-text">
      Основаниями для работы ООО «Степмед Клиник» служат законодательные акты и
      нормативные документы федерального, регионального и локального значения.
    </p>
    <Table />
  </div>
);

export default ZakonodatelnayaKarta;
