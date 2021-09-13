import { useState, FC, useCallback } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useStoreActions } from 'hooks';
import { Transition } from '@headlessui/react';

import {
  INavBarMenu,
  navBarMenu,
  aboutSubMenu,
  forPatientsSubMenu,
} from '@data/navBar';

import LogoWhite from '@components/logo/LogoWhite';
import LogoColor from '@components/logo/LogoColor';
import PenIcon from '@icons/Pen';
import AccountIcon from '@icons/Account';

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

const MenuItem: FC<INavBarMenu> = ({ url, title, external }) => {
  const router = useRouter();

  if (external) {
    return (
      <a
        href={url}
        target="_blank"
        className="pt-4 mt-4 lg:pt-6 lg:mt-6 border-t-2 lg:border-t-4 border-[#a8e0ff] nav__menu-link"
      >
        {title}
      </a>
    );
  }

  if (url) {
    return (
      <Link href={url}>
        <a
          className={classNames('nav__menu-link', {
            active: router.pathname === url,
          })}
        >
          {title}
        </a>
      </Link>
    );
  }

  return (
    <span
      className={classNames('nav__menu-link nav__menu-link-more', {
        active: router.pathname === url,
      })}
    >
      {title}
    </span>
  );
};

const Menu: FC = () => {
  const [menuId, setMenuId] = useState<number>(0);

  return (
    <div className="nav__menu">
      <div
        className={classNames('nav__menu-container', {
          hide: menuId === 1 || menuId === 3,
        })}
      >
        <div className="nav__menu-links">
          {navBarMenu.map((menuItem) => (
            <div
              onClick={() => setMenuId(menuItem.id)}
              key={`menu-${menuItem.id}`}
            >
              <MenuItem {...menuItem} />
            </div>
          ))}
        </div>
      </div>

      {menuId === 1 && (
        <div className="nav__menu-container submenu">
          <div className="nav__menu-links">
            {aboutSubMenu.map((menuItem) => (
              <MenuItem {...menuItem} key={`aboutSubMenu-${menuItem.id}`} />
            ))}
            <div className="nav__menu-back" onClick={() => setMenuId(0)}>
              Назад
            </div>
          </div>
        </div>
      )}

      {menuId === 3 && (
        <div className="nav__menu-container submenu">
          <div className="nav__menu-links">
            {forPatientsSubMenu.map((menuItem) => (
              <MenuItem
                {...menuItem}
                key={`forPatientsSubMenu-${menuItem.id}`}
              />
            ))}
            <div className="nav__menu-back" onClick={() => setMenuId(0)}>
              Назад
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Logo = ({ isOpened = false }) => (
  <Link href="/">
    <a className="z-20 custom-link">
      {isOpened ? <LogoWhite /> : <LogoColor />}
    </a>
  </Link>
);

const CallButton: FC<{
  isOpened: boolean;
  onClick: () => void;
}> = ({ isOpened = false, onClick }) => {
  return (
    <>
      {!isOpened && (
        <button
          className="flex items-center p-2 px-4 text-lg h-14 sm:h-16 2xl:h-20 sm:px-6 lg:px-12 2xl:px-7 bttn"
          onClick={onClick}
          title="Записаться на приём"
        >
          <PenIcon className="w-6 h-6 mr-0 md:mr-3 2xl:mr-0" />
          <span className="hidden text-lg font-bold md:inline-block 2xl:hidden">
            Записаться на приём
          </span>
        </button>
      )}
    </>
  );
};

const Nav = () => {
  const [isOpened, setOpened] = useState(false);

  const setRegBarVisibility = useStoreActions(
    (actions) => actions.regBar.setRegBarVisibility,
  );

  const callButtonOnClick = useCallback(() => {
    setRegBarVisibility(true);
  }, [setRegBarVisibility]);

  return (
    <div className="sticky top-0 z-10 2xl:h-full 2xl:fixed 2xl:left-0">
      <div className={classNames('nav', { 'nav-close': !isOpened })}>
        <Logo isOpened={isOpened} />
        <Hamburger open={isOpened} setOpen={setOpened} />
        <span className="flex-grow"></span>
        <CallButton isOpened={isOpened} onClick={callButtonOnClick} />
        {!isOpened && (
          <a
            href="https://lk.step-med.com/"
            target="_blank"
            className="flex items-center p-2 px-4 ml-2 text-lg 2xl:mt-4 2xl:ml-0 h-14 sm:h-16 2xl:h-20 sm:px-6 lg:px-12 2xl:px-7 bttn"
            title="Личный кабинет"
          >
            <AccountIcon className="w-6 h-6 mr-0 md:mr-3 2xl:mr-0" />
            <span className="hidden text-lg font-bold md:inline-block 2xl:hidden">
              Личный кабинет
            </span>
          </a>
        )}
      </div>
      <Transition
        show={isOpened}
        className="z-10"
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu />
      </Transition>
    </div>
  );
};

export default Nav;
