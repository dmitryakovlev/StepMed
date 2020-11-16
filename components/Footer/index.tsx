import FooterContacts from "./FooterContacts";
import FooterLinks from "./FooterLinks";

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
