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
          <button className="mb-3">Записаться на приём</button>
          <p className="text-center">
            или позвоните на номер:{" "}
            <span className="text-xl font-bold">+7 (812) 219 50 27</span>
          </p>
        </section>
      </div>
      <div className="header__carousel">
        <div className="header__carousel-img">
          <img src="https://scontent-frt3-1.xx.fbcdn.net/v/t31.0-8/17880207_286366411786364_7398929434863517912_o.jpg?_nc_cat=107&_nc_sid=174925&_nc_ohc=cgrsX_UpFQMAX8QesdS&_nc_ht=scontent-frt3-1.xx&oh=fdf7c34e4d4b2cd0f1563e951cda033e&oe=5F9F608B"></img>
        </div>
        <p>Телемедицина в удобное для вас время</p>
      </div>
    </div>
  </>
);

export default Header;
