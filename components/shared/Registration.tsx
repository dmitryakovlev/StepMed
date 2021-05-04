import { useCallback } from 'react';

import { useStoreActions, useStoreState } from 'hooks';
import { MessageStatusENUM } from 'store/models/regForm';

const Registration = () => {
  const regBarVisibility = useStoreState(
    (state) => state.regBar.regBarVisibility,
  );
  const regFormFullName = useStoreState((state) => state.regForm.fullName);
  const regFormPhoneNumber = useStoreState(
    (state) => state.regForm.phoneNumber,
  );
  const regFormMessageStatus = useStoreState(
    (state) => state.regForm.messageStatus,
  );
  const setRegBarVisibility = useStoreActions(
    (actions) => actions.regBar.setRegBarVisibility,
  );
  const setRegFormFullName = useStoreActions(
    (actions) => actions.regForm.setFullName,
  );
  const setRegFormPhoneNumber = useStoreActions(
    (actions) => actions.regForm.setPhoneNumber,
  );
  const setRegFormMessageStatus = useStoreActions((actions) => actions.regForm)
    .setMessageStatus;

  const closeReg = useCallback(() => {
    setRegBarVisibility(false);
  }, [setRegBarVisibility]);

  const changeFullName = useCallback((i) => {
    const value = i.target.value;
    setRegFormFullName(value);
  }, []);

  const changePhoneNumber = useCallback((i) => {
    const value = i.target.value;
    setRegFormPhoneNumber(value);
  }, []);

  const sendTelegramMessage = useCallback(async () => {
    const messageText = `${regFormFullName}: ${regFormPhoneNumber}`;

    let request = await fetch('/api/sendTelegramMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messageText,
      }),
    });

    if (request.status === 200) {
      setRegFormMessageStatus(MessageStatusENUM.SUCCESS);
      return;
    }

    setRegFormMessageStatus(MessageStatusENUM.FAILED);
  }, [regFormFullName, regFormPhoneNumber]);

  return (
    <>
      {regBarVisibility && (
        <aside>
          <div className="z-30 fixed top-0 flex flex-col p-8 w-full md:w-[38rem] h-full bg-white overflow-y-auto">
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
              <input id="name" type="text" onChange={changeFullName}></input>
            </div>
            <div className="custom-input">
              <label htmlFor="phone">Телефон</label>
              <input
                id="phone"
                type="text"
                onChange={changePhoneNumber}
              ></input>
            </div>
            <label className="custom-checkbox" id="data-processing">
              <input
                className="custom-checkbox-disable"
                type="checkbox"
                name="data-processing"
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
            <button className="mt-4 bttn" onClick={sendTelegramMessage}>
              Записаться
            </button>
            <p className="mt-8 text-center">или напишите нам в</p>
            <div className="flex">
              <button className="w-full mr-4 bttn">Telegram</button>
              <button className="w-full bttn">Whatsup</button>
            </div>
          </div>
          <div
            className="fixed top-0 bottom-0 left-0 right-0 z-20 visible w-screen h-screen bg-black opacity-50 cursor-pointer"
            onClick={closeReg}
          ></div>
        </aside>
      )}
    </>
  );
};

export default Registration;
