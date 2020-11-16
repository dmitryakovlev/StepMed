import { FC } from "react";

// About clinic array
const footerAboutClinicData: Array<{
  id: number;
  link: string;
  text: string;
}> = [
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

// For patients array
const footerForPatientsData: Array<{
  id: number;
  link: string;
  text: string;
}> = [
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

const FooterLinksdBlock: FC<{
  link: string;
  text: string;
}> = ({ link, text }) => (
  <li className="mb-1">
    <a className="footer__links-link" href={link}>
      {text}
    </a>
  </li>
);

const FooterLinks = () => (
  <div className="footer__links-container">
    <div className="footer__links-block">
      <h5 className="footer__links-header">О клинике</h5>
      <ul>
        {footerAboutClinicData.map((footer) => (
          <FooterLinksdBlock
            link={footer.link}
            text={footer.text}
            key={footer.id}
          />
        ))}
      </ul>
    </div>

    <div className="footer__links-block">
      <h5 className="footer__links-header">Пациентам</h5>
      <ul>
        {footerForPatientsData.map((footer) => (
          <FooterLinksdBlock
            link={footer.link}
            text={footer.text}
            key={footer.id}
          />
        ))}
      </ul>
    </div>
  </div>
);

export default FooterLinks;
