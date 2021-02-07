import { useState, FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import {
  INavBarMenu,
  navBarMenu,
  aboutSubMenu,
  forPatientsSubMenu,
} from '@data/navBar';

import LogoWhite from '@components/logo/LogoWhite';
// import PenIcon from '@icons/Pen';
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

const MenuItem: FC<INavBarMenu> = ({ url, title }) => {
  const router = useRouter();

  if (url) {
    return (
      <Link href={url}>
        <a
          className={classNames('nav__menu-general-link', {
            red: router.pathname === url,
          })}
        >
          {title}
        </a>
      </Link>
    );
  }

  return (
    <span
      className={classNames('nav__menu-general-link', {
        red: router.pathname === url,
      })}
    >
      {title}
    </span>
  );
};

const Menu: FC = () => {
  const [menuId, setMenuId] = useState<number>(0);

  return (
    <div className={classNames('nav__menu', { active: open })}>
      <div className="nav__menu-container">
        <div
          className={classNames('nav__menu-links', {
            'nav__menu-links-hide': menuId === 1 || menuId === 3,
          })}
        >
          {navBarMenu.map((menuItem) => (
            <div
              onClick={() => setMenuId(menuItem.id)}
              key={`menu-${menuItem.id}`}
            >
              <MenuItem {...menuItem} />
            </div>
          ))}
        </div>

        {menuId === 1 && (
          <div className="nav__menu-links">
            <div onClick={() => setMenuId(0)}>Back</div>
            {aboutSubMenu.map((menuItem) => (
              <MenuItem {...menuItem} key={`aboutSubMenu-${menuItem.id}`} />
            ))}
          </div>
        )}

        {menuId === 3 && (
          <div className="nav__menu-links">
            <div onClick={() => setMenuId(0)}>Back</div>
            {forPatientsSubMenu.map((menuItem) => (
              <MenuItem
                {...menuItem}
                key={`forPatientsSubMenu-${menuItem.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Logo = ({ isOpened = false }) => (
  <Link href="/">
    <a className="custom-link">{isOpened ? <LogoWhite /> : <LogoColor />}</a>
  </Link>
);

// const CallButton = () => (
//   <>
//     <button className="bttn reg--bttn">
//       <PenIcon className="reg--bttn-icon" />
//       <span className="reg--bttn-text">Записаться на приём</span>
//     </button>
//   </>
// );

const Nav = () => {
  const [isOpened, setOpened] = useState(false);

  return (
    <>
      <div className={classNames('nav', { 'nav-close': !isOpened })}>
        <Logo isOpened={isOpened} />
        <Hamburger open={isOpened} setOpen={setOpened} />
        <span className="flex-grow"></span>
        {/* <CallButton /> */}
      </div>
      {isOpened && <Menu />}
    </>
  );
};

export default Nav;
