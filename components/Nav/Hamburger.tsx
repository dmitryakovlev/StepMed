import { FC } from "react";
import classNames from "classnames";

const Hamburger: FC<{
  open: boolean;
  setOpen: any;
}> = ({ open, setOpen }) => {
  return (
    <div
      className={classNames("nav__btn", { active: open })}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div className="nav__btn-box">
        <div className="nav__btn-inner"></div>
      </div>
    </div>
  );
};

export default Hamburger;
