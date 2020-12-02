import LogoColor from "../logos/LogoColor";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import { useState, useRef } from "react";
import LogoWhite from "../logos/LogoWhite";
import PenIcon from "../icons/PenIcon";

const Nav = () => {
  const [open, setOpen] = useState(false);

  let logo;
  let callButton;

  if (open) {
    logo = <LogoWhite />;
  } else {
    logo = <LogoColor />;
  }

  if (!open) {
    callButton = (
      <>
        <button className="bttn reg--bttn">
          <PenIcon class="reg--bttn-icon" />
          <span className="reg--bttn-text">Записаться на приём</span>
        </button>
      </>
    );
  }

  return (
    <>
      <div className="nav">
        {logo}
        <Hamburger open={open} setOpen={setOpen} />
        <span className="flex-grow"></span>
        {callButton}
      </div>
      <Menu open={open} setOpen={setOpen} />
    </>
  );
};

export default Nav;
