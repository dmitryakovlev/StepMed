export interface INavBarMenu {
  id: number;
  url?: string;
  title: string;
}

export const navBarMenu: INavBarMenu[] = [
  {
    id: 0,
    url: '/',
    title: 'Главная',
  },
  {
    id: 1,
    title: 'О клинике',
  },
  // {
  //   id: 2,
  //   url: '/staff',
  //   title: 'Наши сотрудники',
  // },
  {
    id: 3,
    title: 'Пациентам',
  },
  // {
  //   id: 4,
  //   url: '/news',
  //   title: 'Новости',
  // },
  // {
  //   id: 5,
  //   url: '/contacts',
  //   title: 'Контакты',
  // },
];

export const aboutSubMenu: INavBarMenu[] = [
  // {
  //   id: 0,
  //   url: '/',
  //   title: 'О нас',
  // },
  // {
  //   id: 1,
  //   url: '/',
  //   title: 'Документы и лицензии',
  // },
  {
    id: 2,
    url: '/nadzornie-organi',
    title: 'Надзорные органы',
  },
  // {
  //   id: 3,
  //   url: '/',
  //   title: 'Наши партнеры',
  // },
  // {
  //   id: 4,
  //   url: '/',
  //   title: 'Вакансии',
  // },
  {
    id: 5,
    url: '/zakonodatelnaya-karta',
    title: 'Законодательная карта',
  },
  // {
  //   id: 6,
  //   url: '/',
  //   title: 'Правила внутреннего распорядка',
  // },
];

export const forPatientsSubMenu: INavBarMenu[] = [
  {
    id: 0,
    url: '/priyom-onkologa',
    title: 'Прием онколога',
  },
  {
    id: 1,
    url: '/uslugi-i-ceni',
    title: 'Услуги и цены',
  },
  {
    id: 2,
    url: '/himioterapiya-po-oms',
    title: 'Химиотерапия по ОМС',
  },
  // {
  //   id: 3,
  //   url: '/',
  //   title: 'Ранняя диагностика и скрининг',
  // },
  {
    id: 4,
    url: '/covid',
    title: 'COVID-19',
  },
  // {
  //   id: 5,
  //   url: '/',
  //   title: 'Заочная консультация',
  // },
  // {
  //   id: 6,
  //   url: '/',
  //   title: 'Иммунотерапия и таргетная терапия',
  // },
  {
    id: 7,
    url: '/pravila-gospitalizacii',
    title: 'Правила госпитализации',
  },
  // {
  //   id: 8,
  //   url: '/',
  //   title: 'Подготовка к диагностическим исследованиям',
  // },
  // {
  //   id: 9,
  //   url: '/',
  //   title: 'Анкета качества',
  // },
];
