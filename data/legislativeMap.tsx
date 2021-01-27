export interface ILegislativeMapHead {
  id: number;
  heading: string;
}

export const legislativeMapHead: ILegislativeMapHead[] = [
  {
    id: 0,
    heading: '№',
  },
  {
    id: 1,
    heading: 'Наименование нормативного документа',
  },
  {
    id: 2,
    heading: 'Дата издания и номер',
  },
  {
    id: 3,
    heading: 'Ссылка в СПС «Консультант Плюс»',
  },
];

export interface ILegislativeMap {
  id: number;
  order: number;
  name: string;
  date: string;
  url: string;
}

export const legislativeMap: ILegislativeMap[] = [
  {
    id: 0,
    order: 1,
    name:
      'Федеральный закон «Об основах охраны здоровья граждан в Российской Федерации»',
    date: '21 ноября 2011 года №323-ФЗ',
    url: 'http://www.consultant.ru/document/cons_doc_LAW_121895/',
  },
  {
    id: 1,
    order: 2,
    name:
      'Федеральный закон «Об обязательном медицинском страховании в Российской Федерации»',
    date: '29 ноября 2010 года №326-ФЗ',
    url: 'http://www.consultant.ru/document/cons_doc_LAW_107289/',
  },
  {
    id: 2,
    order: 3,
    name:
      'Постановление Правительства Российской Федерации «О программе государственных гарантий бесплатного оказания гражданам медицинской помощи на 2020 год и на плановый период 2021 и 2022 годов»',
    date: '07 декабря 2019 года №1610',
    url: 'http://www.consultant.ru/document/cons_doc_LAW_339883/',
  },
  {
    id: 3,
    order: 4,
    name:
      'Приказ Министерство Здравоохранения Российской Федерации «Об утверждении порядка оказания медицинской помощи населению по профилю "онкология"»',
    date: '15 ноября 2012 года №915н',
    url: 'http://www.consultant.ru/document/Cons_doc_LAW_145464/',
  },
  {
    id: 4,
    order: 5,
    name:
      'Приказ Министерство Здравоохранения Российской Федерации «Об утверждении порядка организации оказания высокотехнологичной медицинской помощи с применением единой государственной информационной системы в сфере здравоохранения»',
    date: '02 октября 2019 года №824н',
    url: 'http://www.consultant.ru/document/cons_doc_LAW_338442/',
  },
  {
    id: 5,
    order: 6,
    name:
      'Приказ Министерство Здравоохранения Российской Федерации «Об утверждении порядка содействия руководителем медицинской организации (ее подразделения) выбору пациентом врача в случае требования пациента о замене лечащего врача»',
    date: '26 апреля 2012 года №407н',
    url: 'http://www.consultant.ru/document/cons_doc_LAW_130703/',
  },
  {
    id: 6,
    order: 7,
    name:
      'Приказ Министерство Здравоохранения Российской Федерации «Об утверждении номенклатуры медицинских услуг»',
    date: '13 октября 2017 года №804н',
    url: 'http://www.consultant.ru/document/cons_doc_LAW_282466/',
  },
  {
    id: 7,
    order: 8,
    name:
      'Приказ Министерство Здравоохранения Российской Федерации «Об утверждении порядка выдачи и оформления листков нетрудоспособности, включая порядок формирования листков нетрудоспособности в форме электронного документа»',
    date: '01 сентября 2020 года №925н',
    url: 'http://www.consultant.ru/document/cons_doc_LAW_362176/',
  },
  {
    id: 8,
    order: 9,
    name:
      'Распоряжение Правительства Российской Федерации «Об утверждении перечня жизненно необходимых и важнейших лекарственных препаратов на 2020 год, а также перечней лекарственных препаратов для медицинского применения и минимального ассортимента лекарственных препаратов, необходимых для оказания медицинской помощи»',
    date: '12 октября 2019 года №2406-р',
    url: 'http://www.consultant.ru/document/cons_doc_LAW_335635/',
  },
  {
    id: 9,
    order: 10,
    name:
      'Закон Санкт-Петербурга «О Территориальной программе государственных гарантий бесплатного оказания гражданам медицинской помощи в Санкт-Петербурге на 2020 год и на плановый период 2021 и 2022 годов»',
    date: '19 декабря 2019 года №682-150',
    url:
      'http://www.consultant.ru/cons/cgi/online.cgi?req=doc&base=SPB&n=220658#09154706024610235',
  },
];