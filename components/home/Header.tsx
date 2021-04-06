import { useCallback } from 'react';

import { useStoreActions } from 'hooks';

const Header = () => {
  const setRegBarVisibility = useStoreActions(
    (actions) => actions.regBar.setRegBarVisibility,
  );

  const callButtonOnClick = useCallback(() => {
    setRegBarVisibility(true);
  }, [setRegBarVisibility]);

  return (
    <div className="relative w-full min-h-0 xl:min-h-screen">
      <div className="container mt-0">
        <section className="flex flex-col xl:justify-center mt-8 md:mt-16 xl:mt-0 mx-auto xl:mx-0 w-full xl:w-[45%] max-w-full md:max-w-xl min-h-0 xl:min-h-screen">
          <p className="mb-1 lg:mb-2">StepMed Clinic</p>
          <h1 className="mb-2 md:mb-4 lg:mb-6">
            Онкологическая клиника.
            <br />
            Шаг за шагом к вашему здоровью.
          </h1>
          <p className="mb-4 md:mb-6">
            Знания, постоянное развитие и забота о пациентах – главные принципы
            работы команды StepMed Clinic. Мы стремимся к лучшему, чтобы
            продвинуться еще на один шаг в борьбе с онкологическими
            заболеваниями.
          </p>
          <button
            className="mb-2 md:mb-3 lg:mb-4 bttn"
            onClick={callButtonOnClick}
          >
            Записаться на приём
          </button>
          <p className="text-center">
            или позвоните на номер:{' '}
            <a
              href="tel:+78122195027"
              className="text-base font-bold custom-link md:text-lg lg:text-xl"
            >
              +7 (812) 219 50 27
            </a>
          </p>
          {/* <p>
            Мы доступны по номеру:{' '}
            <a
              href="tel:+78122195027"
              className="text-base font-bold custom-link md:text-lg lg:text-xl"
            >
              +7 (812) 219 50 27
            </a>
          </p> */}
        </section>
        <section className="static xl:absolute xl:top-0 xl:right-0 mt-8 md:mt-14 lg:mt-20 xl:mt-0 w-full xl:w-[45%] min-h-full xl:min-h-screen max-h-full xl:max-h-screen select-none">
          <img
            src="/images/home/slides/slide_01.webp"
            className="object-cover w-full min-h-0 xl:min-h-screen h-64 md:h-96 lg:h-[36rem] xl:h-auto"
          />
        </section>
      </div>
    </div>
  );
};

export default Header;
