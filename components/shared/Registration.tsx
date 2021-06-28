import { useCallback } from 'react';

import { useStoreActions, useStoreState } from 'hooks';
import { MessageStatusENUM } from 'store/models/regForm';

import WhatsAppIcon from '@icons/Whatsapp';
import TelegramIcon from '@icons/Telegram';

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
  const setRegFormMessageStatus = useStoreActions(
    (actions) => actions.regForm,
  ).setMessageStatus;

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
          <div className="z-30 fixed top-0 flex flex-col p-4 md:p-8 w-full md:w-[38rem] h-full bg-white overflow-y-auto">
            <span
              className="self-end px-2 text-2xl cursor-pointer select-none text-text-secondary hover:text-opacity-60"
              onClick={closeReg}
            >
              &#10005;
            </span>
            <h1 className="my-6 text-xl md:my-10 sm:text-2xl md:text-3xl">
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
            <label className="md:mt-2 custom-checkbox" id="data-processing">
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
            <button className="mt-6 md:mt-8 bttn" onClick={sendTelegramMessage}>
              Записаться
            </button>
            <p className="mt-4 mb-2 text-center md:mt-8 md:mb-4">
              или напишите нам
            </p>
            <div className="flex flex-col sm:flex-row">
              <a
                target="_blank"
                href=""
                className="items-center w-full sm:mr-4 bttn"
              >
                <TelegramIcon className="w-8 h-8 mr-3" />
                <span className="bttn-text">Telegram</span>
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=79214149058"
                className="items-center w-full mt-4 sm:mt-0 bttn"
              >
                <WhatsAppIcon className="w-8 h-8 mr-3" />
                <span className="bttn-text">WhatsApp</span>
              </a>
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
