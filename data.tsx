import React from "react";
// Dashboard
import RegistrationIcon from "@components/icons/RegistrationIcon";
import InsuranceIcon from "@components/icons/InsuranceIcon";
import PriceIcon from "@components/icons/PriceIcon";
import AnalysisIcon from "@components/icons/AnalysisIcon";
import CovidIcon from "@components/icons/CovidIcon";
import StaffIcon from "@components/icons/StaffIcon";
import QuestionsIcon from "@components/icons/QuestionsIcon";
import NewsIcon from "@components/icons/NewsIcon";
// Footer
import WhatsappIcon from "@components/icons/WhatsappIcon";
import InstagramIcon from "@components/icons/InstagramIcon";
import NapopravkuIcon from "@components/icons/NapopravkuIcon";
import ProdoktorovIcon from "@components/icons/ProdoktorovIcon";
import TwogisIcon from "@components/icons/TwogisIcon";
import YandexIcon from "@components/icons/YandexIcon";

// // // LANDING PAGE // // //
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Carousel at landing page
// ------------------------------------------------------------------------------------------------------------------------------------------------
export interface HomeCarousel {
  id: number;
  link: string;
  alt: string;
  text: string;
}

export const homeCarousel: HomeCarousel[] = [
  {
    id: 0,
    link: "/images/Slide_1.jpg",
    alt: "Мы ценим ваше доверие",
    text: "Мы ценим ваше доверие",
  },
  {
    id: 1,
    link: "/images/Slide_2.jpg",
    alt: "Комфортные условия лечения",
    text: "Комфортные условия лечения",
  },
  {
    id: 2,
    link: "/images/Slide_3.jpg",
    alt: "Только качественные препараты",
    text: "Только качественные препараты",
  },
  {
    id: 3,
    link: "/images/Slide_4.jpg",
    alt: "Опытный персонал",
    text: "Опытный персонал",
  },
];

// Dashboard at landing page
// ------------------------------------------------------------------------------------------------------------------------------------------------
export interface HomeDashboard {
  id: number;
  link: string;
  icon: JSX.Element | JSX.IntrinsicElements;
  text: string;
}

export const homeDashboard: HomeDashboard[] = [
  {
    id: 0,
    link: "#",
    icon: <RegistrationIcon />,
    text: "Приём онколога",
  },
  {
    id: 1,
    link: "#",
    icon: <InsuranceIcon />,
    text: "Химиотерапия по ОМС",
  },
  {
    id: 2,
    link: "#",
    icon: <PriceIcon />,
    text: "Услуги и цены",
  },
  {
    id: 3,
    link: "#",
    icon: <AnalysisIcon />,
    text: "Раняя диагностика и скрининг",
  },
  {
    id: 4,
    link: "#",
    icon: <CovidIcon />,
    text: "COVID-19",
  },
  {
    id: 5,
    link: "/staff",
    icon: <StaffIcon />,
    text: "Наши врачи",
  },
  {
    id: 6,
    link: "#",
    icon: <QuestionsIcon />,
    text: "Заочная консультация",
  },
  {
    id: 7,
    link: "#",
    icon: <NewsIcon />,
    text: "Наши события",
  },
];

// About at landing page
// ------------------------------------------------------------------------------------------------------------------------------------------------
export interface HomeAbout {
  id: number;
  title: string;
  description: string;
}

export const homeAbout: HomeAbout[] = [
  {
    id: 0,
    title: "Пациент на первом месте",
    description:
      "Каждый пациент имеет свои особенности заболевания, и внимательное отношение к деталям очень важно для определения грамотной тактики лечения. Именно поэтому приемы врача не ограничиваются установленным временем, а консилиумы проводятся с привлечением всех необходимых специалистов.",
  },
  {
    id: 1,
    title: "Только качественные препараты",
    description:
      "Для нас важно использование качественных препаратов. Мы с первого дня поддерживаем систему маркировки, находимся на прямой связи с производителями, при этом не участвуем в бюрократических процедурах закупки, что позволяет не ориентироваться на самые низкие цены аналогов препаратов.",
  },
  {
    id: 2,
    title: "Мы за доступность медицины",
    description:
      "Нам доступны большие возможности бесплатной медицины. Вы можете получить лечение по ОМС, поскольку наша клиника участвует в реализации программы государственных гарантий. У нас нет цели назначить как можно больше платных процедур, мы против коррупции, мы за доступность.",
  },
  {
    id: 3,
    title: "Непрерывность и преемственность лечения",
    description:
      "Лечение в онкологии не ограничивается только химиотерапией. Для обеспечения комплексного подхода требуется привлечение хирургов и лучевых терапевтов. Если что-то выходит за рамки возможностей нашей клиники – это не означает, что мы откажем в лечении. В таких ситуациях мы используем все ресурсы наших партнеров для организации полноценной помощи.",
  },
  {
    id: 4,
    title: "Своевременное начало и строгое соблюдение интервалов лечения",
    description:
      "Мы имеем возможность начать терапию в любое время после того, как определена тактика лечения.  При отсутствии противопоказаний – терапия начнётся вовремя. Достаточная подготовительная и сопроводительная терапия позволит минимизировать риски нежелательных явлений.",
  },
  {
    id: 5,
    title: "Возможность участия в клинических исследованиях",
    description:
      "Мы понимаем важность клинических исследований, поскольку это передовые технологии в медицине. Наша команда участвует и непрерывно отслеживает все открытые клинические исследования. Даже если они не доступны для проведения в нашей клинике – мы окажем содействие по включению вас в протоколы других исследовательских центров.",
  },
];

// Footer contacts at landing page
// ------------------------------------------------------------------------------------------------------------------------------------------------
export interface HomeFooterContacts {
  id: number;
  link: string;
  icon: JSX.Element;
}

export const homeFooterContacts: HomeFooterContacts[] = [
  { id: 0, link: "#", icon: <WhatsappIcon /> },
  { id: 1, link: "#", icon: <InstagramIcon /> },
  { id: 2, link: "#", icon: <NapopravkuIcon /> },
  { id: 3, link: "#", icon: <ProdoktorovIcon /> },
  { id: 4, link: "#", icon: <TwogisIcon /> },
  { id: 5, link: "#", icon: <YandexIcon /> },
];

// Footer links at landing page
// ------------------------------------------------------------------------------------------------------------------------------------------------
export interface HomeFooterLinks {
  id: number;
  link: string;
  text: string;
}

export const homeFooterLinksClinic: HomeFooterLinks[] = [
  {
    id: 0,
    link: "#",
    text: "О нас",
  },
  {
    id: 1,
    link: "#",
    text: "Документы и лицензии",
  },
  {
    id: 2,
    link: "#",
    text: "Надзорные органы",
  },
  {
    id: 3,
    link: "#",
    text: "Наши партнеры",
  },
  {
    id: 4,
    link: "#",
    text: "Вакансии",
  },
  {
    id: 5,
    link: "#",
    text: "Законодательная карта",
  },
  {
    id: 6,
    link: "#",
    text: "Правила внутреннего распорядка",
  },
];

export const homeFooterLinksPatients: HomeFooterLinks[] = [
  {
    id: 0,
    link: "#",
    text: "Прием онколога",
  },
  {
    id: 1,
    link: "#",
    text: "Услуги и цены",
  },
  {
    id: 2,
    link: "#",
    text: "Лечение по ОМС",
  },
  {
    id: 3,
    link: "#",
    text: "Ранняя диагностика и скрининг",
  },
  {
    id: 4,
    link: "#",
    text: "COVID-19",
  },
  {
    id: 5,
    link: "#",
    text: "Заочная консультация",
  },
  {
    id: 6,
    link: "#",
    text: "Иммунотерапия и таргетная терапия",
  },
  {
    id: 7,
    link: "#",
    text: "Правила госпитализации",
  },
  {
    id: 8,
    link: "#",
    text: "Подготовка к диагностическим исследованиям",
  },
  {
    id: 9,
    link: "#",
    text: "Анкета качества",
  },
];
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // // STAFF PAGE // // //
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

export interface Staff {
  id: number;
  photoUrl: string;
  fullName: string;
  workPosition: string;
  description: string;
  education: string[];
  professionalCommunity?: string[];
  advancedTraining?: string[];
  publications?: string[];
  social: {
    facebook?: string;
    vk?: string;
    linkedIn?: string;
    whatsapp?: string;
  };
}

export const staffDoctors: Staff[] = [
  {
    id: 0,
    photoUrl: "/images/staff/yulia.png",
    fullName: "Юлия Александровна Гронская",
    workPosition: "онколог-химиотерапевт",
    description:
      "Не следует, однако, забывать, что консультация с широким активом требует определения и уточнения анализа существующих паттернов поведения. В частности, сложившаяся структура организации прекрасно подходит для реализации вывода текущих активов! Современные технологии достигли такого уровня, что семантический разбор внешних противодействий способствует повышению качества новых принципов формирования материально-технической и кадровой базы!",
    education: ["ПСПБГМУ им. ак. Павлова И.П.", "ПСПБГМУ им. ак. Павлова И.П."],
    professionalCommunity: ["yuri.jpg"],
    advancedTraining: [],
    publications: [],
    social: {
      facebook: "yulia",
      vk: "yulia",
      linkedIn: "yulia",
      whatsapp: "https://yulia.com",
    },
  },
];

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
