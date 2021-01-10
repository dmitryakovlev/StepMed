import ITworks from './ITworks';
import TwoFiveSeven from './TwoFiveSeven';

const Partners = () => (
  <>
    <div className="container mt-16 md:mt-32">
      <h1 className="mb-5">Полезные ссылки.</h1>
      <p>
        Мы сотрудничаем с лидирующими медицинскими организациями,
        диагностическими центрами, IT-разработчиками и другими компаниями.
      </p>
      <div className="partners__block">
        <TwoFiveSeven />
        <ITworks />
      </div>
    </div>
  </>
);

export default Partners;
