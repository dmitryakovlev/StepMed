import { useCallback } from 'react';
import classNames from 'classnames';

import { useStoreActions, useStoreState } from 'hooks';

const Registration = () => {
  const regBarVisibility = useStoreState(
    (state) => state.regBar.regBarVisibility,
  );

  const setRegBarVisibility = useStoreActions(
    (actions) => actions.regBar.setRegBarVisibility,
  );

  const regFormFullName = useStoreState((state) => state.regForm.fullName);

  const setRegFormFullName = useStoreActions(
    (actions) => actions.regForm.setFullName,
  );

  // const sendTelegramMessage = useStoreActions(
  //   (actions) => actions.regForm.sendMessage,
  // );

  const closeReg = useCallback(() => {
    setRegBarVisibility(false);
  }, [setRegBarVisibility]);

  // const sendMessage = useCallback(() => {
  //   sendTelegramMessage();
  // }, [sendTelegramMessage]);

  return (
    <>
      {regBarVisibility && (
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
              <input
                id="name"
                type="text"
                // defaultValue={regFormFullName}
                onChange={(i) => setRegFormFullName(i.target.value)}
              ></input>
            </div>
            <div className="custom-input">
              <label htmlFor="phone">Телефон</label>
              <input id="phone" type="text"></input>
            </div>
            <label className="custom-checkbox" id="data-processing">
              <input
                className="custom-checkbox-disable"
                type="checkbox"
                name="data-processing"
                defaultChecked
              />
              <span className="custom-checkbox-button"></span>
              <p className="mt-0 ml-2 custom-text">
                Я соглашаюсь на{' '}
                <a
                  href="/obrabotka-dannih"
                  className="custom-text-link"
                  target="_blank"
                >
                  обработку персональных данных
                </a>
              </p>
            </label>
            <button
              className="mt-4 bttn"
              // onClick={sendMessage}
            >
              Записаться
            </button>
            <p className="mt-8 text-center">или напишите нам в</p>
          </div>
          <div
            className="fixed top-0 bottom-0 left-0 right-0 z-40 visible w-screen h-screen bg-black opacity-50 cursor-pointer"
            onClick={closeReg}
          ></div>
        </aside>
      )}
    </>
  );
};

export default Registration;
