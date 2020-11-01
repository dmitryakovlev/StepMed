import { FC } from "react";
import classNames from "classnames";

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

export default Menu;
