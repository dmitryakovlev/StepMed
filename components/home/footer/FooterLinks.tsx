import { FC } from "react";
import {
  HomeFooterLinks,
  homeFooterLinksClinic,
  homeFooterLinksPatients,
} from "@data";

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

export default FooterLinks;
