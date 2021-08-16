import { FC } from 'react';
import Link from 'next/link';

import AddressIcon from '@icons/Address';
import EmailIcon from '@icons/Email';
import PhoneIcon from '@icons/Phone';
import TwoFiveSevenFooter from '@icons/TwoFiveSevenFooter';
import { IFooterContacts, footerContacts } from '@data/footer';
import { INavBarMenu, aboutSubMenu, forPatientsSubMenu } from '@data/navBar';

const FooterContactsSocial: FC<IFooterContacts> = ({ url, icon, color }) => (
  <a
    href={url}
    className={`mr-6 transition duration-200 ease-in-out fill-current last:mr-0 lg:hover:opacity-60 ${color}`}
    target="_blank"
  >
    {icon}
  </a>
);

export const FooterContactsBlock: FC<{
  color: string;
}> = ({ color }) => (
  <div className="flex flex-col flex-shrink-0 lg:mr-16">
    <div className="flex items-center mb-4 lg:mb-6">
      <span className={`mr-4 fill-current lg:mr-6 ${color}`}>
        <PhoneIcon />
      </span>
      <div className="flex flex-col">
        <a
          href="tel:+78122195027"
          className={`mb-1 text-2xl font-bold custom-link md:text-3xl ${color}`}
        >
          +7 (812) 219 50 27
        </a>
        <span className={`text-base opacity-50 md:text-lg lg:text-xl ${color}`}>
          Ежедневно с 9:00 до 19:00
        </span>
      </div>
    </div>

    <div className="flex items-center mb-4 lg:mb-6">
      <span className={`mr-4 fill-current lg:mr-6 ${color}`}>
        <AddressIcon />
      </span>
      <div className="flex flex-col">
        <span
          className={`mb-1 text-base font-bold md:text-lg lg:text-xl ${color}`}
        >
          Большеохтинский проспект, 16 к.1
        </span>
        <span className={`text-base opacity-50 md:text-lg lg:text-xl ${color}`}>
          Санкт-Петербург
        </span>
      </div>
    </div>

    <div className="flex items-center mb-4 lg:mb-6">
      <span className={`mr-4 fill-current lg:mr-6 ${color}`}>
        <EmailIcon />
      </span>
      <a
        href="mailto:clinic@step-med.com"
        className={`mb-1 text-base font-bold  custom-link md:text-lg lg:text-xl ${color}`}
      >
        clinic@step-med.com
      </a>
    </div>

    <div className="flex mt-4">
      {footerContacts.map((contact) => (
        <FooterContactsSocial {...contact} key={contact.id} color={color} />
      ))}
    </div>
  </div>
);

const FooterLinksdBlock: FC<INavBarMenu> = ({ url, title }) => (
  <li className="mb-2">
    <Link href={url!}>
      <a className="text-sm font-bold text-white transition duration-200 ease-in-out opacity-50 lg:hover:opacity-100">
        {title}
      </a>
    </Link>
  </li>
);

const FooterLinks = () => (
  <div className="flex flex-col mt-10 select-none md:mt-12 sm:flex-row lg:mt-0">
    <div className="flex flex-col sm:mr-8">
      <span className="mb-4 text-lg font-bold text-white md:text-xl">
        О клинике
      </span>
      <ul>
        {aboutSubMenu.map((footer) => (
          <FooterLinksdBlock {...footer} key={footer.id} />
        ))}
      </ul>
    </div>

    <div className="flex flex-col mt-4 sm:mt-0">
      <span className="mb-4 text-lg font-bold text-white md:text-xl">
        Пациентам
      </span>
      <ul>
        {forPatientsSubMenu.map((footer) => (
          <FooterLinksdBlock {...footer} key={footer.id} />
        ))}
      </ul>
    </div>
  </div>
);

const FooterBootom = () => (
  <div className="flex flex-col 2xl:flex-row">
    <div className="flex flex-col flex-grow mr-10">
      <span className="mb-2 text-base text-white lg:mb-4">
        Степмед Клиник © 2021
      </span>
      <div className="flex flex-col lg:flex-row">
        <span className="mb-1 text-sm text-white opacity-50 lg:mb-0 lg:mr-6">
          Лицензия: ЛО-78-01-011064 от 26.08.2020
        </span>
        <span className="mb-1 text-sm text-white opacity-50 lg:mb-0 lg:mr-6">
          ИНН: 7806574123
        </span>
        <span className="text-sm text-white opacity-50">
          ОГРН: 1207800087516
        </span>
      </div>
    </div>
    <div className="flex-shrink-0 mt-8 2xl:self-end 2xl:mt-0">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <span className="flex-shrink-0 mb-2 text-xs text-white opacity-50 lg:mb-0 lg:mr-3">
          Разработка и дизайн
        </span>
        <span className="w-full">
          <TwoFiveSevenFooter />
        </span>
      </div>
    </div>
  </div>
);

export const Footer = () => (
  <div className="mt-8 md:mt-12 lg:mt-16 bg-text-secondary">
    <div className="flex py-10 border-b-2 border-gray-100 border-opacity-25 md:py-12">
      <div className="container flex flex-col mt-0 lg:flex-row">
        <FooterContactsBlock color="text-white" />
        <span className="md:flex-grow"></span>
        <FooterLinks />
      </div>
    </div>
    <div className="flex py-6 md:py-8">
      <div className="container mt-0">
        <FooterBootom />
      </div>
    </div>
  </div>
);
