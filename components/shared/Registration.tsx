import { useCallback, useEffect } from 'react';

import { useStoreActions, useStoreState } from 'hooks';
import { MessageStatusENUM } from 'store/models/regForm';
import InputMask from 'react-input-mask';
import { useForm, SubmitHandler } from 'react-hook-form';

import WhatsAppIcon from '@icons/Whatsapp';
import TelegramIcon from '@icons/Telegram';

interface IFormInputs {
  fullName: string;
  phoneNumber: string;
  dataProcessing: boolean;
}

const Registration = () => {
  const regBarVisibility = useStoreState(
    (state) => state.regBar.regBarVisibility,
  );
  const regFormMessageStatus = useStoreState(
    (state) => state.regForm.messageStatus,
  );
  const setRegBarVisibility = useStoreActions(
    (actions) => actions.regBar.setRegBarVisibility,
  );
  const setRegFormMessageStatus = useStoreActions(
    (actions) => actions.regForm,
  ).setMessageStatus;

  const closeReg = useCallback(() => {
    setRegBarVisibility(false);
  }, [setRegBarVisibility]);

  const { register, handleSubmit, reset, formState } = useForm<IFormInputs>({
    defaultValues: { fullName: '', phoneNumber: '', dataProcessing: false },
  });

  useEffect(() => {
    if (
      formState.isSubmitSuccessful &&
      regFormMessageStatus === MessageStatusENUM.SUCCESS
    ) {
      reset({ fullName: '', phoneNumber: '', dataProcessing: false });
    }
  }, [formState, reset]);

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const request = await fetch('/api/sendTelegramMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messageText: `👤 : ${data.fullName}\n📱 : ${data.phoneNumber}`,
      }),
    });

    if (request.status === 200) {
      setRegFormMessageStatus(MessageStatusENUM.SUCCESS);
      return;
    }

    return setRegFormMessageStatus(MessageStatusENUM.FAILED);
  };

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
              Оставьте свой номер телефона и мы перезвоним Вам в рабочее время
              клиники.
            </h1>

            {regFormMessageStatus === MessageStatusENUM.FAILED && (
              <p className="text-red-400 custom-form-info">
                Произошла ошибка во время отравки сообщения! Повторите ещё раз.
              </p>
            )}

            {regFormMessageStatus === MessageStatusENUM.SUCCESS && (
              <p className="text-green-400 custom-form-info">
                Ваше сообщение было успешно отправлено. Спасибо!
              </p>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="custom-input">
                <label htmlFor="fullName">Имя</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Например, Соколов Александр"
                  maxLength={40}
                  {...register('fullName', { required: true })}
                ></input>
                {formState.errors.fullName && (
                  <p className="custom-input-error">
                    Поле "Имя" обязательно для заполнения
                  </p>
                )}
              </div>

              <div className="custom-input">
                <label htmlFor="phoneNumber">Телефон</label>
                <InputMask
                  id="phoneNumber"
                  type="text"
                  placeholder="Например, +7 (812) 123-45-67"
                  mask="+7 \(999) 999-99-99"
                  {...register('phoneNumber', { required: true })}
                />
                {formState.errors.phoneNumber && (
                  <p className="custom-input-error">
                    Поле "Телефон" обязательно для заполнения
                  </p>
                )}
              </div>

              <div className="custom-input md:mt-6">
                <label className="custom-checkbox" id="dataProcessing">
                  <input
                    className="custom-checkbox-disable"
                    type="checkbox"
                    {...register('dataProcessing', { required: true })}
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
                {formState.errors.dataProcessing && (
                  <p className="custom-input-error">
                    Необходимо согласие на обработку персональных данных
                  </p>
                )}
              </div>

              <button type="submit" className="w-full mt-6 md:mt-8 bttn">
                Записаться
              </button>
            </form>

            <p className="mt-4 mb-2 text-center md:mt-8 md:mb-4">
              или напишите нам
            </p>
            <div className="flex flex-col sm:flex-row">
              <a
                target="_blank"
                href="https://t.me/Stepmed_Clinic"
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
