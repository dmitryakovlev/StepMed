import { useState, FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
// import {
//   NavBarMenu,
//   navBarMenu,
//   NavBarMenuAdditional,
//   navBarMenuClinic,
//   navBarMenuPatients,
// } from "@data";

import navBar from '@data/navBar';

import LogoWhite from '@components/logos/LogoWhite';
import PenIcon from '@components/icons/PenIcon';
import LogoColor from '@components/logos/LogoColor';

const Hamburger: FC<{
  open: boolean;
  setOpen: any;
}> = ({ open, setOpen }) => {
  return (
    <div
      className={classNames('nav__btn', { active: open })}
      onClick={() => setOpen(!open)}
    >
      <div className="nav__btn-box">
        <div className="nav__btn-inner"></div>
      </div>
    </div>
  );
};

// const MenuItem: FC<NavBarMenu> = (menu) => (
//   <Link href={menu.link}>
//     <a className={menu.class}>{menu.title}</a>
//   </Link>
// );

// const MenuItemAdditional: FC<NavBarMenuAdditional> = (menu) => (
//   <Link href={menu.link}>
//     <a className="nav__menu-additional-link">{menu.title}</a>
//   </Link>
// );

const Menu: FC<{
  open: any;
  setOpen: any;
}> = ({ open }) => {
  return (
    <div className={classNames('nav__menu', { active: open })}>
      <div className="nav__menu-container">
        {/* <div className="nav__menu-links nav__menu-links-show">
          {navBarMenu.map((menu) => (
            <MenuItem {...menu} key={menu.id} />
          ))}
        </div>

        <div className="nav__menu-links nav__menu-additional-links-hide">
          {navBarMenuClinic.map((menu) => (
            <MenuItemAdditional {...menu} key={menu.id} />
          ))}
        </div>

        <div className="nav__menu-links nav__menu-additional-links-hide">
          {navBarMenuPatients.map((menu) => (
            <MenuItemAdditional {...menu} key={menu.id} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

const Nav = () => {
  const [open, setOpen] = useState(false);

  let logo;
  let callButton;
  let navClass;

  if (open) {
    logo = <LogoWhite />;
  } else {
    logo = <LogoColor />;
  }

  if (!open) {
    callButton = (
      <>
        <button className="bttn reg--bttn">
          <PenIcon className="reg--bttn-icon" />
          <span className="reg--bttn-text">Записаться на приём</span>
        </button>
      </>
    );
  }

  if (open) {
    navClass = 'nav';
  } else {
    navClass = 'nav nav-close';
  }

  return (
    <>
      <div className={navClass}>
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
