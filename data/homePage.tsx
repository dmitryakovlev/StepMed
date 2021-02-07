import RegistrationIcon from '@components/icons/Registration';
import InsuranceIcon from '@components/icons/Insurance';
import PriceIcon from '@components/icons/Price';
import AnalysisIcon from '@components/icons/Analysis';
import CovidIcon from '@components/icons/Covid';
import StaffIcon from '@components/icons/Staff';
import QuestionsIcon from '@components/icons/Questions';
import NewsIcon from '@components/icons/News';

// Carousel at home page
export interface IHomeCarousel {
  id: number;
  url: string;
  alt: string;
  text: string;
}

export const homeCarousel: IHomeCarousel[] = [
  {
    id: 0,
    url: '/images/Slide_1.jpg',
    alt: 'Мы ценим ваше доверие',
    text: 'Мы ценим ваше доверие',
  },
  {
    id: 1,
    url: '/images/Slide_2.jpg',
    alt: 'Комфортные условия лечения',
    text: 'Комфортные условия лечения',
  },
  {
    id: 2,
    url: '/images/Slide_3.jpg',
    alt: 'Только качественные препараты',
    text: 'Только качественные препараты',
  },
  {
    id: 3,
    url: '/images/Slide_4.jpg',
    alt: 'Опытный персонал',
    text: 'Опытный персонал',
  },
];

// Dashboard at home page
export interface IHomeDashboard {
  id: number;
  url: string;
  icon: JSX.Element | JSX.IntrinsicElements;
  text: string;
}

export const homeDashboard: IHomeDashboard[] = [
  {
    id: 0,
    url: '/innerpages/oncologistsAppointment',
    icon: <RegistrationIcon />,
    text: 'Приём онколога',
  },
  {
    id: 1,
    url: '/innerpages/chemotherapyOMS',
    icon: <InsuranceIcon />,
    text: 'Химиотерапия по ОМС',
  },
  {
    id: 2,
    url: '/innerpages/servicesAndPrices',
    icon: <PriceIcon />,
    text: 'Услуги и цены',
  },
  // {
  //   id: 3,
  //   url: '/',
  //   icon: <AnalysisIcon />,
  //   text: 'Раняя диагностика и скрининг',
  // },
  {
    id: 4,
    url: '/innerpages/covid',
    icon: <CovidIcon />,
    text: 'COVID-19',
  },
  // {
  //   id: 5,
  //   url: '/staff',
  //   icon: <StaffIcon />,
  //   text: 'Наши врачи',
  // },
  // {
  //   id: 6,
  //   url: '/',
  //   icon: <QuestionsIcon />,
  //   text: 'Заочная консультация',
  // },
  // {
  //   id: 7,
  //   url: '/',
  //   icon: <NewsIcon />,
  //   text: 'Наши события',
  // },
];

// About at home page
export interface IHomeAbout {
  id: number;
  title: string;
  description: string;
}

export const homeAbout: IHomeAbout[] = [
  {
    id: 0,
    title: 'Пациент на первом месте',
    description:
      'Каждый пациент имеет свои особенности заболевания, и внимательное отношение к деталям очень важно для определения грамотной тактики лечения. Именно поэтому приемы врача не ограничиваются установленным временем, а консилиумы проводятся с привлечением всех необходимых специалистов.',
  },
  {
    id: 1,
    title: 'Только качественные препараты',
    description:
      'Для нас важно использование качественных препаратов. Мы с первого дня поддерживаем систему маркировки, находимся на прямой связи с производителями, при этом не участвуем в бюрократических процедурах закупки, что позволяет не ориентироваться на самые низкие цены аналогов препаратов.',
  },
  {
    id: 2,
    title: 'Мы за доступность медицины',
    description:
      'Нам доступны большие возможности бесплатной медицины. Вы можете получить лечение по ОМС, поскольку наша клиника участвует в реализации программы государственных гарантий. У нас нет цели назначить как можно больше платных процедур, мы против коррупции, мы за доступность.',
  },
  {
    id: 3,
    title: 'Непрерывность и преемственность лечения',
    description:
      'Лечение в онкологии не ограничивается только химиотерапией. Для обеспечения комплексного подхода требуется привлечение хирургов и лучевых терапевтов. Если что-то выходит за рамки возможностей нашей клиники – это не означает, что мы откажем в лечении. В таких ситуациях мы используем все ресурсы наших партнеров для организации полноценной помощи.',
  },
  {
    id: 4,
    title: 'Своевременное начало и строгое соблюдение интервалов лечения',
    description:
      'Мы имеем возможность начать терапию в любое время после того, как определена тактика лечения.  При отсутствии противопоказаний – терапия начнётся вовремя. Достаточная подготовительная и сопроводительная терапия позволит минимизировать риски нежелательных явлений.',
  },
  {
    id: 5,
    title: 'Возможность участия в клинических исследованиях',
    description:
      'Мы понимаем важность клинических исследований, поскольку это передовые технологии в медицине. Наша команда участвует и непрерывно отслеживает все открытые клинические исследования. Даже если они не доступны для проведения в нашей клинике – мы окажем содействие по включению вас в протоколы других исследовательских центров.',
  },
];
