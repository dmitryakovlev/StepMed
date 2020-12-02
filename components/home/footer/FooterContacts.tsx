import { FC } from "react";
import { homeFooterContacts, HomeFooterContacts } from "@data";
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

export default FooterContacts;
