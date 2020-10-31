import LogoColorText from "../Logos/LogoColorText";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import { useState, useRef } from "react";
import LogoWhite from "../Logos/LogoWhite";

const Nav = () => {
  const [open, setOpen] = useState(false);

  let logo;
  let callButton;

  if (open) {
    logo = <LogoWhite />;
  } else {
    logo = <LogoColorText />;
  }

  if (!open) {
    callButton = (
      <button>
        <img src="./images/NavBtn.png" />
      </button>
    );
  }

  return (
    <div className="nav">
      <div>
        {logo}
        <Hamburger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>

      <span className="flex-grow"></span>
      {callButton}
    </div>
  );
};

export default Nav;
