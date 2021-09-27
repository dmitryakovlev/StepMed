import InstagramFeed from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

const News = () => (
  <>
    <div className="container mt-16 lg:mt-32">
      <h1 className="mb-4 md:mb-6">Наши новости:</h1>
      <p className="mb-4 md:mb-6">
        Самую актуальную информацию о событиях клиники мы размещаем на нашей
        страничке в Instagram. Там вы можете узнать нас поближе, посмотреть
        работу клиники изнутри, увидеть наши ценности и приоритеты,
        познакомиться с врачами и персоналом клиники. Также в Instagram мы
        освещаем новости и интересные события из мира онкологии. Ниже можно
        ознакомиться со свежими публикациями.
      </p>
      <InstagramFeed token={process.env.INSTAGRAM_TOKEN} counter="8" />
    </div>
  </>
);

export default News;
