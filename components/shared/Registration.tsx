import { useState, FC } from 'react';
import classNames from 'classnames';

const Registration = () => {
  const [isOpenedReg, setOpenedReg] = useState(true);

  function closeReg() {
    setOpenedReg((isOpenedReg) => (isOpenedReg = false));
  }

  return (
    <>
      {isOpenedReg && (
        <aside>
          <div className="z-50 fixed top-0 flex flex-col p-8 w-full md:w-[38rem] h-full bg-white overflow-y-auto">
            <span
              className="self-end px-2 text-2xl cursor-pointer select-none text-text-secondary hover:text-opacity-60"
              onClick={closeReg}
            >
              &#10005;
            </span>
            <h1 className="my-10 text-xl sm:text-2xl md:text-3xl">
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
          <div
            className="fixed top-0 bottom-0 left-0 right-0 z-40 visible w-screen h-screen bg-black opacity-50"
            onClick={closeReg}
          ></div>
        </aside>
      )}
    </>
  );
};

export default Registration;
