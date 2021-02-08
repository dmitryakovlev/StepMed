export interface IPravilaGospitalizaciiHead {
  id: number;
  heading: string;
}

export const pravilaGospitalizaciiHead: IPravilaGospitalizaciiHead[] = [
  {
    id: 0,
    heading: '№',
  },
  {
    id: 1,
    heading: 'Наименование исследования',
  },
  {
    id: 2,
    heading: 'Срок годности',
  },
];

export interface IPravilaGospitalizacii {
  id: number;
  order: number;
  name: string;
  date: string;
}

export const pravilaGospitalizaciiFirst: IPravilaGospitalizacii[] = [
  {
    id: 0,
    order: 1,
    name: 'Клинический анализ крови (+лейкоцитарная формула)',
    date: '5 дней',
  },
  {
    id: 1,
    order: 2,
    name:
      'Биохимический анализ крови (общий белок, мочевина, креатинин, билирубин общий, АЛТ, АСТ, глюкоза)',
    date: '7 дней',
  },
  {
    id: 2,
    order: 3,
    name: 'Коагулограмма (АЧТВ, МНО, ПТИ, фибриноген, тромбиновое время)',
    date: '7 дней',
  },
  {
    id: 3,
    order: 4,
    name: 'Общий анализ мочи',
    date: '10 дней',
  },
  {
    id: 4,
    order: 5,
    name: 'Анализ на COVID-19 (мазок методом ПЦР)',
    date: '7 дней',
  },
  {
    id: 5,
    order: 6,
    name: 'Анализ крови на RW (сифилис), ВИЧ, гепатиты В, С',
    date: '3 месяца',
  },
  {
    id: 6,
    order: 7,
    name: 'Анализ крови на группу крови и резус-фактор',
    date: 'бессрочно',
  },
  {
    id: 7,
    order: 8,
    name: 'ЭКГ',
    date: '1 месяц',
  },
  {
    id: 8,
    order: 9,
    name: 'КТ (УЗИ) органов брюшной полости',
    date: '6 месяцев',
  },
  {
    id: 9,
    order: 10,
    name: 'КТ (рентгенография) органов грудной клетки',
    date: '6 месяцев',
  },
  {
    id: 10,
    order: 11,
    name: 'Гистологическое заключение (+иммуногистохимия)',
    date: '-',
  },
  {
    id: 11,
    order: 12,
    name: 'Направление по форме 057-у/04',
    date: '-',
  },
];

export const pravilaGospitalizaciiSecond: IPravilaGospitalizacii[] = [
  {
    id: 0,
    order: 1,
    name: 'Биохимический анализ крови (тропонин I, калий, натрий)',
    date: '7 дней',
  },
  {
    id: 1,
    order: 2,
    name: 'ЭХО-КГ',
    date: '3 месяца',
  },
];

export const pravilaGospitalizaciiThird: IPravilaGospitalizacii[] = [
  {
    id: 0,
    order: 1,
    name: 'Анализ крови на гормоны щитовидной железы (ТТГ, Т3, Т4)',
    date: '3 месяца',
  },
];
