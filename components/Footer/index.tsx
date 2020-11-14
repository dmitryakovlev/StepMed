import FooterContacts from "./FooterContacts";
import FooterLinks from "./FooterLinks";

const Footer = () => (
  <div className="mt-32 footer">
    <div className="footer__general">
      <div className="container flex flex-col lg:flex-row">
        <FooterContacts />
        <FooterLinks />
      </div>
    </div>
    <div className="container">
      <h6 className="py-8 text-center">
        Copyright © 2020 StepMed Clinic // Designed by Dmitr Yakovlev
      </h6>
    </div>
  </div>
);

export default Footer;
