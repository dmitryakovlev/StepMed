import WashhandsIcon from '@icons/Washhands';
import DonttouchIcon from '@icons/Donttouch';
import CrowdIcon from '@icons/Crowd';

const Covid = () => (
  <div className="container">
    <h1>COVID-19</h1>
    <img src="/images/illustrations/covid.webp" />
    <p className="custom-text-message">
      Новая короновирусная инфекция – заболевание, влияющее на дыхательную
      систему человека.
    </p>

    <h2 className="custom-title">Откуда взялся коронавирус?</h2>
    <p className="custom-text">
      Распространение вируса SARS-CoV-2 началось с китайского города Ухань. В
      декабре 2019 там произошла мощная вспышка этого заболевания. Ниже можно
      ознакомиться с актуальной статистикой.
    </p>

    <iframe
      src="https://datalens.yandex/p6p0ajd3s5z6l?56667170-2453-459b-a0ae-635d2e7fcfd2=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB.&56667170-2453-459b-a0ae-635d2e7fcfd2=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&56667170-2453-459b-a0ae-635d2e7fcfd2=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3&56667170-2453-459b-a0ae-635d2e7fcfd2=%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB.&56667170-2453-459b-a0ae-635d2e7fcfd2=%D0%9D%D0%B8%D0%B6%D0%B5%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB.&56667170-2453-459b-a0ae-635d2e7fcfd2=%D0%94%D0%B0%D0%B3%D0%B5%D1%81%D1%82%D0%B0%D0%BD&56667170-2453-459b-a0ae-635d2e7fcfd2=%D0%9C%D1%83%D1%80%D0%BC%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB.&56667170-2453-459b-a0ae-635d2e7fcfd2=%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9&56667170-2453-459b-a0ae-635d2e7fcfd2=%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB.&56667170-2453-459b-a0ae-635d2e7fcfd2=%D0%A2%D1%83%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB."
      width="100%"
      height="400"
      frameBorder="0"
      className="mt-8"
    ></iframe>

    <h2 className="custom-title">Как передается коронавируc?</h2>
    <p className="custom-text">
      Воздушно-капельным путем (кашель и чихание). Контактным путём (через
      прикосновения).
    </p>
    <p className="custom-text-message warning">
      Вирус может передаваться через поручни в метро, дверные ручки и другие
      поверхности.
    </p>

    <h2 className="custom-title">
      Симптомы и признаки коронавируса у человека
    </h2>
    <p className="custom-text-message warning">
      Похожие симптомы встречаются у пациентов с ОРВИ или гриппом. При их
      обнаружении необходимо незамедлительно обратиться к врачу для получения
      медицинской помощи и исключения коронавируса.
    </p>
    <div className="custom-list">
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Высокая температура.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Затрудненное дыхание.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Чихание, кашель и заложенность носа.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Боли в мышцах и в груди.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Головная боль и слабость.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Возможна тошнота, рвота и диарея.</p>
      </div>
    </div>
    <div className="custom-list">
      <p className="custom-list-heading">
        Оставайтесь дома и обратитесь к врачу, если:
      </p>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Вы контактировали с заразившимся COVID-19.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Вернулись из страны, где идет вспышка болезни.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Если у вас повышенная температура, кашель и одышка.</p>
      </div>
    </div>

    <h1 className="mt-8 md:mt-10 lg:mt-12">Профилактика коронавируса:</h1>

    <div className="grid grid-cols-1 gap-6 mt-6">
      <div className="covid-container">
        <WashhandsIcon />
        <div className="covid-block">
          <h2 className="custom-title">Мойте руки</h2>
          <p className="custom-text">
            Всегда мойте руки: когда приходите на работу или возвращаетесь
            домой. Для профилактики также подойдут влажные салфетки или
            дезинфицирующие растворы.
          </p>
        </div>
      </div>

      <div className="covid-container">
        <DonttouchIcon />
        <div className="covid-block">
          <h2 className="custom-title">Не трогайте лицо руками</h2>
          <p className="custom-text">
            Не подносите руки к носу и глазам. Быстрее всего вирус попадает в
            организм через слизистую оболочку. Когда чихаете всегда
            прикрывайтесь платком.
          </p>
        </div>
      </div>

      <div className="covid-container">
        <CrowdIcon />
        <div className="covid-block">
          <h2 className="custom-title">Избегайте больших скоплений людей</h2>
          <p className="custom-text">
            Избегайте ненужных поездок и не ходите в места массового скопления
            людей.
          </p>
        </div>
      </div>
    </div>

    <h1 className="mt-8 md:mt-10 lg:mt-12">Вопросы и ответы:</h1>

    <h2 className="custom-title">Как правильно носить маску?</h2>
    <p className="custom-text">
      Маски могут иметь разную конструкцию. Они могут быть одноразовыми или
      могут применяться многократно. Есть маски, которые служат 2, 4, 6 часов.
      Стоимость этих масок различная, из-за различной пропитки. Но нельзя все
      время носить одну и ту же маску, тем самым Вы можете инфицировать дважды
      сами себя.
    </p>
    <div className="custom-list">
      <p className="custom-list-heading">
        Чтобы обезопасить себя от заражения, крайне важно правильно ее носить:
      </p>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Обычную медицинскую маску необходимо менять каждые 2 часа.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Маска должна тщательно закрепляться, плотно закрывать рот и нос, не
          оставляя зазоров.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Старайтесь не касаться поверхностей маски при ее снятии, если Вы ее
          коснулись, тщательно вымойте руки с мылом или спиртовым средством.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Влажную или отсыревшую маску следует сменить на новую, сухую.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Не используйте вторично одноразовую маску.</p>
      </div>
    </div>
    <p className="custom-text">
      Маска уместна, если Вы находитесь в месте массового скопления людей, в
      общественном транспорте, а также при уходе за больным, но она
      нецелесообразна на открытом воздухе.
    </p>

    <h2 className="custom-title">Что делать в случае заболевания ОРВИ?</h2>
    <p className="custom-text-message warning">
      Оставайтесь дома и обратитесь к врачу.
    </p>
    <p className="custom-text">
      Следуйте предписаниям врача, соблюдайте постельный режим и пейте как можно
      больше жидкости.
    </p>

    <h2 className="custom-title">
      Какие осложнения могут быть у коронавирусной инфекции?
    </h2>
    <p className="custom-text">
      Среди осложнений лидирует вирусная пневмония. Ухудшение состояния при
      вирусной пневмонии идёт быстрыми темпами, и у многих пациентов уже в
      течение 24 часов развивается дыхательная недостаточность, требующая
      немедленной респираторной поддержки с механической вентиляцией лёгких.
      Быстро начатое лечение способствует облегчению степени тяжести болезни.
    </p>

    <h2 className="custom-title">
      Что делать, если в семье кто-то заболел ОРВИ?
    </h2>
    <div className="custom-list">
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Вызовите врача.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Выделите больному отдельную комнату в доме. Если это невозможно,
          соблюдайте расстояние не менее 1 метра от больного.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Ограничьте до минимума контакт между больным и близкими, особенно
          детьми, пожилыми людьми и лицами, страдающими хроническими
          заболеваниями.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Часто проветривайте помещение. Сохраняйте чистоту, как можно чаще
          мойте и дезинфицируйте поверхности бытовыми моющими средствами.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Часто мойте руки с мылом.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Ухаживая за больным, прикрывайте рот и нос маской или другими
          защитными средствами (платком, шарфом и др.).
        </p>
      </div>
    </div>
    <p className="custom-text-message warning">
      Ухаживать за больным должен только один член семьи.
    </p>

    <h2 className="custom-title">
      Что делать при появлении признаков заболевания?
    </h2>
    <p className="custom-text">
      Не паникуйте, сохраняйте спокойствие и сразу же сообщите об этом в
      поликлинику, не выходя из дома.
    </p>

    <h2 className="custom-title">
      Какое время сохраняется вирус на различных поверхностях?
    </h2>
    <p className="custom-text">
      От 48 часов, во влажной среде может быть дольше. Вирус в течение
      нескольких часов или нескольких дней разрушается при комнатной
      температуре, разрушается под воздействием высоких (более 27 градусов)
      температур, под воздействием солнечного света, дезинфицирующих средств.
    </p>
    <p className="custom-text-message">
      По данным китайских ученых, новый коронавирус может сохраняться более 5
      суток.
    </p>

    <h2 className="custom-title">
      Можно ли вакцинироваться пациентам, страдающим онкологическими
      заболеваниями?
    </h2>
    <p className="custom-text">
      Часто пациенты с онкозаболеваниями не хотят вакцинироваться от
      коронавируса и пытаются получить медотвод. Правильно ли это? Давайте
      разберемся.
    </p>
    <p className="custom-text">
      Сейчас нет данных о том, что прививка может нести дополнительные риски для
      людей с раком, при химиотерапии или провоцировать у онкопациентов какие-то
      проблемы в будущем. Вопрос стоит в другом: польза, которую получит пациент
      от прививки существенно превышает потенциальные риски.
    </p>
    <p className="custom-text">
      Ввиду наличия онкологического заболевания риски заражения возрастают не
      только из-за факта самого заболевания, но еще и из-за того, что пациент
      является регулярным посетителем медицинских организаций, где риск
      заражения довольно высок.
    </p>

    <h2 className="custom-title">Кому можно делать прививку?</h2>
    <p className="custom-text">
      Если Вы уже давно получаете лекарственное противоопухолевое лечение без
      каких либо видов гематологической токсичности (снижение уровня
      гемоглобина, лейкоцитов, нейтрофилов) – прививаться можно.
    </p>
    <p className="custom-text">
      Если Вы получаете только таргетную, имунную или гормональную терапию –
      прививаться можно.
    </p>
    <p className="custom-text">
      Если Вы закончили все этапы противоопухолевого лечения и находитесь под
      динамическим наблюдением – прививаться можно.
    </p>

    <h2 className="custom-title">Кому нельзя делать прививку?</h2>
    <p className="custom-text">
      Пациентам, которые начали агрессивную терапию цитостатиками – будет
      целесообразно подождать несколько циклов для оценки переносимости.
    </p>
    <p className="custom-text">
      Пациентам, у которых проведение лекарственной терапии сопровождается
      существенной токсичностью, особенно снижением уровня нейтрофилов.
    </p>
    <p className="custom-text">
      Пациентам, которым в ближайшее время запланировано хирургическое лечение.
    </p>

    <p className="custom-text-message">
      Таким образом, мы рекомендуем делать прививку всем пациентам при
      отсутствии противоопоказаний.
    </p>
    <p className="custom-text">
      Если у вас остались вопросы и Вы не можете принять решение о том, стоит ли
      делать прививку – стоит обсудить этот вопрос с врачом-онкологом.
    </p>
  </div>
);

export default Covid;
