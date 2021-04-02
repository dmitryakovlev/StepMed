import { useState } from 'react';
import classNames from 'classnames';

const Registration = () => {
  const [isOpened, setOpened] = useState(false);

  return (
    <aside>
      <div className="reg__nav">
        <span className="reg__nav-close">&#10005;</span>
        <h1 className="reg__nav-title">
          Оставьте свой номер телефона и мы перезвоним вам в рабочее время
          клиники.
        </h1>
        <div className="custom-input">
          <label htmlFor="name">Имя</label>
          <input id="name" type="text"></input>
        </div>
        <div className="custom-input">
          <label htmlFor="phone">Телефон</label>
          <input id="phone" type="text"></input>
        </div>
        <button className="mt-4 bttn">Записаться</button>
      </div>
      <div className="reg__nav-bg"></div>
    </aside>
  );
};

export default Registration;
