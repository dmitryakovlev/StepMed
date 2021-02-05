import { useState, FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { INavBarMenu, navBarMenu, aboutSubMenu } from '@data/navBar';

import LogoWhite from '@components/logo/LogoWhite';
import PenIcon from '@icons/Pen';
import LogoColor from '@components/logo/LogoColor';

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

const MenuItem: FC<INavBarMenu> = ({ url, title }) => (
  <Link href={url}>
    <a className="nav__menu-general-link">{title}</a>
  </Link>
);

// {subMenu &&
//   subMenu.map(({ url, title }) => (
//     <Link href={url}>
//       <a className="nav__menu-additional-link">{title}</a>
//     </Link>
//   ))}

const Menu: FC<{
  open: any;
  setOpen: any;
}> = ({ open }) => {
  const navSubMenuItems = navBarMenu.filter((element) => element.subMenu);

  // console.log({ navSubMenuItems });

  return (
    <div className={classNames('nav__menu', { active: open })}>
      <div className="nav__menu-container">
        <div className="nav__menu-links">
          {navBarMenu.map((menuItem) => (
            <MenuItem {...menuItem} key={menuItem.id} />
          ))}
        </div>

        <div className="nav__menu-links nav__menu-additional-links-hide">
          {aboutSubMenu.map((menuItem) => (
            <MenuItem {...menuItem} key={menuItem.id} />
          ))}
        </div>

        {/*
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

  // if (!open) {
  //   callButton = (
  //     <>
  //       <button className="bttn reg--bttn">
  //         <PenIcon className="reg--bttn-icon" />
  //         <span className="reg--bttn-text">Записаться на приём</span>
  //       </button>
  //     </>
  //   );
  // }

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
