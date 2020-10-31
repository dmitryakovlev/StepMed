import Carousel from "./Carousel";

const Header = () => (
  <>
    <div className="header">
      <div className="header-container">
        <section className="header__text-container">
          <p className="mb-3">StepMed Clinic</p>
          <h1 className="mb-5">
            Онкологическая клиника.
            <br />
            Шаг за шагом к вашему здоровью.
          </h1>
          <p className="mb-8">
            Знания, постоянное развитие и забота о пациентах – главные принципы
            работы команды StepMed Clinic. Мы стремимся к лучшему, чтобы
            продвинуться еще на один шаг в борьбе с онкологическими
            заболеваниями.
          </p>
          <button className="mb-3 bttn">Записаться на приём</button>
          <p className="text-center">
            или позвоните на номер:{" "}
            <span className="text-xl font-bold">+7 (812) 219 50 27</span>
          </p>
        </section>
      </div>
      <div className="header__carousel">
        <Carousel />
        <p>Телемедицина в удобное для вас время</p>
      </div>
    </div>
  </>
);

export default Header;
