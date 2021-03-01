import { useState } from 'react';
import classNames from 'classnames';

const Registration = () => {
  const [isOpened, setOpened] = useState(false);

  return (
    <aside>
      <div className="reg__nav">
        <span className="reg__nav-close">X</span>
        <h2>
          Оставьте свой номер телефона и мы перезвоним вам в рабочее время
          клиники.
        </h2>
        <div className="">
          <label htmlFor="name">Имя</label>
          <input id="name" type="text"></input>
        </div>
        <div>
          <label htmlFor="phone">Телефон</label>
          <input id="phone" type="text"></input>
        </div>
        <button className="bttn">Записаться</button>
      </div>
      <div className="reg__nav-bg"></div>
    </aside>
  );
};

export default Registration;
