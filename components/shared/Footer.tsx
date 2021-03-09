import { FC } from 'react';
import Link from 'next/link';

import AddressIcon from '@icons/Address';
import EmailIcon from '@icons/Email';
import PhoneIcon from '@icons/Phone';
import TwoFiveSevenWhite from '@icons/TwoFiveSevenWhite';
import { IFooterContacts, footerContacts } from '@data/footer';
import { INavBarMenu, aboutSubMenu, forPatientsSubMenu } from '@data/navBar';

const FooterContactsSocial: FC<IFooterContacts> = ({ url, icon }) => (
  <a href={url} className="footer__contacts-social" target="_blank">
    {icon}
  </a>
);

const FooterContactsBlock = () => (
  <div className="footer__contacts-container">
    <div className="footer__contacts-item">
      <span className="footer__contacts-icon">
        <PhoneIcon />
      </span>
      <div className="flex flex-col">
        <a href="tel:78122195027" className="footer__contacts-title big">
          +7 (812) 219 50 27
        </a>
        <span className="footer__contacts-text small">
          Ежедневно с 9:00 до 19:00
        </span>
      </div>
    </div>

    <div className="footer__contacts-item">
      <span className="footer__contacts-icon">
        <AddressIcon />
      </span>
      <div className="flex flex-col">
        <span className="footer__contacts-title">
          Большеохтинский проспект, 16 к.1
        </span>
        <span className="footer__contacts-text">Санкт-Петербург</span>
      </div>
    </div>

    <div className="footer__contacts-item">
      <span className="footer__contacts-icon">
        <EmailIcon />
      </span>
      <span className="footer__contacts-title">clinic@step-med.com</span>
    </div>

    <div className="footer__contacts-socials">
      {footerContacts.map((contact) => (
        <FooterContactsSocial {...contact} key={contact.id} />
      ))}
    </div>
  </div>
);

const FooterLinksdBlock: FC<INavBarMenu> = ({ url, title }) => (
  <li className="mb-2">
    <Link href={url!}>
      <a className="footer__links-link">{title}</a>
    </Link>
  </li>
);

const FooterLinks = () => (
  <div className="footer__links-container">
    <div className="footer__links-block">
      <span className="footer__links-title">О клинике</span>
      <ul>
        {aboutSubMenu.map((footer) => (
          <FooterLinksdBlock {...footer} key={footer.id} />
        ))}
      </ul>
    </div>

    <div className="footer__links-block">
      <span className="footer__links-title">Пациентам</span>
      <ul>
        {forPatientsSubMenu.map((footer) => (
          <FooterLinksdBlock {...footer} key={footer.id} />
        ))}
      </ul>
    </div>
  </div>
);

const FooterBootom = () => (
  <div className="footer__bottom">
    <div className="footer__bottom-left">
      <span className="footer__bottom-copyright">Степмед Клиник © 2021</span>
      <div className="footer__bottom-licenses">
        <span className="footer__bottom-license">
          Лицензия: ЛО-01-011064 от 26.08.2020
        </span>
        <span className="footer__bottom-license">ИНН: 7806574123</span>
        <span className="footer__bottom-license">ОГРН: 1207800087516</span>
      </div>
    </div>
    <div className="footer__bottom-right">
      <div className="footer__bottom-container">
        <span className="footer__bottom-developers">Разработка и дизайн</span>
        <span className="footer__bottom-logo">
          <TwoFiveSevenWhite />
        </span>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <div className="footer">
    <div className="footer__general">
      <div className="container flex flex-col lg:flex-row">
        <FooterContactsBlock />
        <span className="md:flex-grow"></span>
        <FooterLinks />
      </div>
    </div>
    <div className="footer__additional">
      <div className="container">
        <FooterBootom />
      </div>
    </div>
  </div>
);

export default Footer;
