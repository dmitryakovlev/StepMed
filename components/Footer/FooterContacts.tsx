import AddressIcon from "../Icons/AddressIcon";
import EmailIcon from "../Icons/EmailIcon";
import PhoneIcon from "../Icons/PhoneIcon";

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
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default FooterContacts;
