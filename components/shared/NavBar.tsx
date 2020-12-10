import { useState, FC, useRef } from "react";
import classNames from "classnames";

import LogoWhite from "@components/logos/LogoWhite";
import PenIcon from "@components/icons/PenIcon";
import LogoColor from "@components/logos/LogoColor";

const Hamburger: FC<{
  open: boolean;
  setOpen: any;
}> = ({ open, setOpen }) => {
  return (
    <div
      className={classNames("nav__btn", { active: open })}
      onClick={() => setOpen(!open)}
    >
      <div className="nav__btn-box">
        <div className="nav__btn-inner"></div>
      </div>
    </div>
  );
};

const Menu: FC<{
  open: any;
  setOpen: any;
}> = ({ open }) => {
  return (
    <div className={classNames("nav__menu", { active: open })}>
      <div className="nav__menu-links">
        <a href="/" className="nav__menu-link">
          Главная
        </a>
        <a href="/" className="nav__menu-link">
          О клинике
        </a>
        <a href="/" className="nav__menu-link">
          Наши сотрудники
        </a>
        <a href="/" className="nav__menu-link">
          Пациентам
        </a>
        <a href="/" className="nav__menu-link">
          Новости
        </a>
        <a href="/" className="nav__menu-link">
          Контакты
        </a>
      </div>
    </div>
  );
};

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
