const Header = () => (
  <>
    <div className="header">
      <div className="header-container">
        <section className="header__text-container">
          <p className="mb-2 md:mb-3">StepMed Clinic</p>
          <h1 className="mb-4 md:mb-5">
            Онкологическая клиника.
            <br />
            Шаг за шагом к вашему здоровью.
          </h1>
          <p className="mb-6">
            Знания, постоянное развитие и забота о пациентах – главные принципы
            работы команды StepMed Clinic. Мы стремимся к лучшему, чтобы
            продвинуться еще на один шаг в борьбе с онкологическими
            заболеваниями.
          </p>
          {/* <button className="mb-2 md:mb-3 bttn">Записаться на приём</button>
          <p className="text-center">
            или позвоните на номер:{' '}
            <a
              href="tel:78122195027"
              className="text-base font-bold md:text-xl"
            >
              +7 (812) 219 50 27
            </a>
          </p> */}
          <p>
            Мы доступны по номеру:{' '}
            <a
              href="tel:78122195027"
              className="text-base font-bold md:text-xl"
            >
              +7 (812) 219 50 27
            </a>
          </p>
        </section>
        <section className="header__carousel">
          <img
            src="/images/home/slides/slide_01.webp"
            className="header__carousel-img"
          />
        </section>
      </div>
    </div>
  </>
);

export default Header;
