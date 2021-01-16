export interface INavBarMenu {
  id: number;
  url: string;
  title: string;
  subMenu?: Array<{ id: number; url: string; title: string }>;
}

export const navBarMenu: INavBarMenu[] = [
  {
    id: 0,
    url: '/',
    title: 'Главная',
  },
  {
    id: 1,
    url: '/',
    title: 'О клинике',
    subMenu: [
      {
        id: 0,
        url: '/',
        title: 'О нас',
      },
      {
        id: 1,
        url: '/',
        title: 'Документы и лицензии',
      },
      {
        id: 2,
        url: '/',
        title: 'Надзорные органы',
      },
      {
        id: 3,
        url: '/',
        title: 'Наши партнеры',
      },
      {
        id: 4,
        url: '/',
        title: 'Вакансии',
      },
      {
        id: 5,
        url: '/',
        title: 'Законодательная карта',
      },
      {
        id: 6,
        url: '/',
        title: 'Правила внутреннего распорядка',
      },
    ],
  },
  {
    id: 2,
    url: '/staff',
    title: 'Наши сотрудники',
  },
  {
    id: 3,
    url: '/',
    title: 'Пациентам',
    subMenu: [
      {
        id: 0,
        url: '/',
        title: 'Прием онколога',
      },
      {
        id: 1,
        url: '/',
        title: 'Услуги и цены',
      },
      {
        id: 2,
        url: '/',
        title: 'Лечение по ОМС',
      },
      {
        id: 3,
        url: '/',
        title: 'Ранняя диагностика и скрининг',
      },
      {
        id: 4,
        url: '/',
        title: 'COVID-19',
      },
      {
        id: 5,
        url: '/',
        title: 'Заочная консультация',
      },
      {
        id: 6,
        url: '/',
        title: 'Иммунотерапия и таргетная терапия',
      },
      {
        id: 7,
        url: '/',
        title: 'Правила госпитализации',
      },
      {
        id: 8,
        url: '/',
        title: 'Подготовка к диагностическим исследованиям',
      },
      {
        id: 9,
        url: '/',
        title: 'Анкета качества',
      },
    ],
  },
  {
    id: 4,
    url: '/',
    title: 'Новости',
  },
  {
    id: 5,
    url: '/',
    title: 'Контакты',
  },
];

export const aboutSubMenu = [
  {
    id: 0,
    url: '/',
    title: 'О нас',
  },
  {
    id: 1,
    url: '/',
    title: 'Документы и лицензии',
  },
  {
    id: 2,
    url: '/',
    title: 'Надзорные органы',
  },
  {
    id: 3,
    url: '/',
    title: 'Наши партнеры',
  },
  {
    id: 4,
    url: '/',
    title: 'Вакансии',
  },
  {
    id: 5,
    url: '/',
    title: 'Законодательная карта',
  },
  {
    id: 6,
    url: '/',
    title: 'Правила внутреннего распорядка',
  },
];
