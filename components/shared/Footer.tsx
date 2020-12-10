import { FC } from "react";
import {
  HomeFooterContacts,
  homeFooterContacts,
  HomeFooterLinks,
  homeFooterLinksClinic,
  homeFooterLinksPatients,
} from "@data";
import AddressIcon from "@components/icons/AddressIcon";
import EmailIcon from "@components/icons/EmailIcon";
import PhoneIcon from "@components/icons/PhoneIcon";

const FooterContactsSocial: FC<HomeFooterContacts> = (contact) => (
  <a className="footer__contacts-social" href={contact.link}>
    {contact.icon}
  </a>
);

const FooterContacts = () => (
  <div className="footer__contacts-container">
    <h4>StepMed Clinic</h4>

    <div className="footer__contacts-contact">
      <span className="footer__contacts-contact-icon">
        <AddressIcon />
      </span>
      <span className="footer__contacts-contact-text">
        Санкт-Петербург, <br />
        Большеохтинский проспект, 16 к.1
      </span>
    </div>

    <div className="footer__contacts-contact">
      <span className="footer__contacts-contact-icon">
        <PhoneIcon />
      </span>
      <span className="font-bold footer__contacts-contact-text">
        +7 (812) 219 50 27
      </span>
    </div>

    <div className="footer__contacts-contact">
      <span className="footer__contacts-contact-icon">
        <EmailIcon />
      </span>
      <span className="font-bold footer__contacts-contact-text">
        clinic@step-med.com
      </span>
    </div>

    <div className="footer__contacts-socials">
      {homeFooterContacts.map((contact) => (
        <FooterContactsSocial {...contact} key={contact.id} />
      ))}
    </div>
  </div>
);

const FooterLinksdBlock: FC<HomeFooterLinks> = (footer) => (
  <li className="mb-1">
    <a className="footer__links-link" href={footer.link}>
      {footer.text}
    </a>
  </li>
);

const FooterLinks = () => (
  <div className="footer__links-container">
    <div className="footer__links-block">
      <h5 className="footer__links-header">О клинике</h5>
      <ul>
        {homeFooterLinksClinic.map((footer) => (
          <FooterLinksdBlock {...footer} key={footer.id} />
        ))}
      </ul>
    </div>

    <div className="footer__links-block">
      <h5 className="footer__links-header">Пациентам</h5>
      <ul>
        {homeFooterLinksPatients.map((footer) => (
          <FooterLinksdBlock {...footer} key={footer.id} />
        ))}
      </ul>
    </div>
  </div>
);

const Footer = () => (
  <div className="mt-32 footer">
    <div className="footer__general">
      <div className="container flex flex-col lg:flex-row">
        <FooterContacts />
        <span className="md:flex-grow"></span>
        <FooterLinks />
      </div>
    </div>
    <div className="container">
      <h6 className="py-8 text-center">
        Copyright © 2020 StepMed Clinic // Created by twoFiveSeven
      </h6>
    </div>
  </div>
);

export default Footer;
