import { FC } from "react";
import AddressIcon from "../Icons/AddressIcon";
import EmailIcon from "../Icons/EmailIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import NapopravkuIcon from "../Icons/NapopravkuIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import ProdoktorovIcon from "../Icons/ProdoktorovIcon";
import TwogisIcon from "../Icons/TwogisIcon";
import WhatsappIcon from "../Icons/WhatsappIcon";
import YandexIcon from "../Icons/YandexIcon";

const footerContactsSocialData: Array<{
  id: number;
  link: string;
  icon: JSX.Element;
}> = [
  { id: 0, link: "#", icon: <WhatsappIcon /> },
  { id: 1, link: "#", icon: <InstagramIcon /> },
  { id: 2, link: "#", icon: <NapopravkuIcon /> },
  { id: 3, link: "#", icon: <ProdoktorovIcon /> },
  { id: 4, link: "#", icon: <TwogisIcon /> },
  { id: 5, link: "#", icon: <YandexIcon /> },
];

const FooterContactsSocial: FC<{ link: string; icon: JSX.Element }> = ({
  link,
  icon,
}) => (
  <a className="footer__contacts-social" href={link}>
    {icon}
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
      {footerContactsSocialData.map((contact) => (
        <FooterContactsSocial
          link={contact.link}
          icon={contact.icon}
          key={contact.id}
        />
      ))}
    </div>
  </div>
);

export default FooterContacts;
