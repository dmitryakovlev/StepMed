import WashhandsIcon from '@icons/Washhands';
import DonttouchIcon from '@icons/Donttouch';
import CrowdIcon from '@icons/Crowd';
import TravelingIcon from '@icons/Traveling';

const Covid = () => (
  <div className="container">
    <h1>COVID-19</h1>

    <p className="custom-text-message">
      Новая короновирусная инфекция – заболевание, влияющее на дыхательную
      систему человека.
    </p>

    <h2 className="custom-title">Откуда взялся коронавирус?</h2>
    <p className="custom-text">
      Распространение вируса SARS-CoV-2 началось с китайского города Ухань. В
      прошлом году там произошла мощная вспышка этого заболевания. По последним
      данным сегодня в мире выявлено около 34 млн случаев заражения
      коронавирусом.
    </p>
    <p className="custom-text-message warning">
      В России 17 803 955 человек прошли тесты на коронавирус. К счастью,
      большинство проб не подтвердились. Заболели 1 415 316, а 1 075 904
      пациентов уже выздоровели (данные с 5 ноября 2020 года).
    </p>

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

    <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
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

      <div className="covid-container">
        <TravelingIcon />
        <div className="covid-block">
          <h2 className="custom-title">Отмените путешествия</h2>
          <p className="custom-text">
            На время, пока разные страны мира борются с корона вирусом, не
            следует путешествовать заграницу. В особенности туда, где ситуация с
            коронавирусом крайне тяжелая.
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
      время носить одну и ту же маску, тем самым вы можете инфицировать дважды
      сами себя. Какой стороной внутрь носить медицинскую маску —
      непринципиально.
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
          Старайтесь не касаться поверхностей маски при ее снятии, если вы ее
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
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Использованную одноразовую маску следует немедленно выбросить в
          отходы.
        </p>
      </div>
    </div>
    <p className="custom-text">
      При уходе за больным, после окончания контакта с заболевшим, маску следует
      немедленно снять. После снятия маски необходимо незамедлительно и
      тщательно вымыть руки.
    </p>
    <p className="custom-text">
      Маска уместна, если вы находитесь в месте массового скопления людей, в
      общественном транспорте, а также при уходе за больным, но она
      нецелесообразна на открытом воздухе.
    </p>
    <p className="custom-text">
      Во время пребывания на улице полезно дышать свежим воздухом и маску
      надевать не стоит. Вместе с тем, медики напоминают, что эта одиночная мера
      не обеспечивает полной защиты от заболевания. Кроме ношения маски
      необходимо соблюдать другие профилактические меры.
    </p>

    <h2 className="custom-title">Что делать в случае заболевания ОРВИ?</h2>
    <p className="custom-text-message warning">
      Оставайтесь дома и срочно обращайтесь к врачу.
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

    <h2 className="custom-title">Почему необходимо находиться на карантине?</h2>
    <p className="custom-text">
      Если вы вернулись из-за границы или контактировали с заболевшим, нужно
      соблюдать карантин у себя дома 14 дней. Это нужно для того, чтобы не
      распространять инфекцию.
    </p>
    <p className="custom-text">
      Если вы находились за границей вместе с друзьями или с семьей, можно
      соблюдать совместный карантин 14 дней в одном помещении или квартире.
    </p>

    <h2 className="custom-title">Почему карантин длится 14 дней?</h2>
    <p className="custom-text">
      Если человек заражается, то в течение 14 дней появляются симптомы болезни:
      повышение температуры, сухой кашель, затруднение дыхания, боли в мышцах,
      утомляемость. В эти 14 дней можно заразить других людей, поэтому важно
      изолироваться на все 14 дней.
    </p>

    <h2 className="custom-title">Что означает находиться дома на карантине?</h2>
    <p className="custom-text">
      Главное условие – не выходить из дома все 14 дней, даже для покупки
      продуктов и лекарств, получения посылок, оплаты коммунальных услуг, выноса
      мусора.
    </p>
    <p className="custom-text">
      Очень важно ограничить контакты с членами своей семьи и другими людьми.
      Если все же происходит контакт с другими людьми, необходимо надевать
      медицинскую маску или респиратор.
    </p>
    <div className="custom-list">
      <p className="custom-list-heading">
        Во время карантина обязательно нужно:
      </p>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Мыть руки водой с мылом перед приемом пищи, перед контактом со
          слизистыми оболочками глаз, рта, носа, после посещения туалета.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Регулярно проветривать помещение и проводить влажную уборку с
          применением средств бытовой химии.
        </p>
      </div>
    </div>
    <p className="custom-text">
      Покупать продукты и товары нужно через интернет или с помощью волонтеров.
    </p>
    <p className="custom-text">
      Бытовой мусор нужно упаковать в двойные прочные мусорные пакеты, плотно
      закрыть и выставить за пределы квартиры. Утилизировать этот мусор можно
      попросить друзей, знакомых или волонтеров.
    </p>
    <p className="custom-text">
      Если вы живете в квартире или в доме с другими людьми, по возможности
      находитесь в отдельной комнате. Пользуйтесь отдельной посудой, бельем и
      полотенцами.
    </p>

    <h2 className="custom-title">
      Как поддерживать связь с родными и друзьями во время карантина?
    </h2>
    <p className="custom-text">
      Вы можете общаться с родственниками и друзьями по телефону или с помощью
      любых других средств связи.
    </p>

    <h2 className="custom-title">
      Что делать при появлении признаков заболевания?
    </h2>
    <p className="custom-text">
      Не паникуйте, сохраняйте спокойствие и сразу же сообщите об этом в
      поликлинику, не выходя из дома.
    </p>

    <h2 className="custom-title">
      Как получить больничный на период карантина?
    </h2>
    <p className="custom-text">
      Пока вы находитесь на домашнем карантине, вам открывают больничный на 14
      дней. Чтобы получить больничный, не нужно приходить в поликлинику, его
      можно заказать по телефону и получить доставкой на дом.
    </p>

    <h2 className="custom-title">
      Как проводится медицинское наблюдение во время карантина?
    </h2>
    <p className="custom-text">
      За всеми, кто находится на карантине, ведут медицинское наблюдение. На
      10-е сутки карантина врачи берут мазок из носа или горла.
    </p>

    <h2 className="custom-title">Что будет с теми, кто нарушает карантин?</h2>
    <p className="custom-text">
      При нарушении режима карантина человек помещается в инфекционную больницу.
    </p>

    <h2 className="custom-title">Как понять, что карантин закончился?</h2>
    <p className="custom-text">
      Карантин на дому заканчивается после 14 дней изоляции, если нет признаков
      заболевания и в мазке из носа или горла нет вируса.
    </p>
    <p className="custom-text-message">
      Помните, что, соблюдая карантин, вы заботитесь о близких и окружающих, а
      также помогаете остановить эпидемию в стране!
    </p>

    <h2 className="custom-title">
      В какой срок должны сообщать результаты теста на коронавирус?
    </h2>
    <p className="custom-text">
      Уточняйте в месте сдачи теста, обычно 1,5 — 2 дня.
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
      Можно ли сдать тест в коммерческих лабораториях?
    </h2>
    <p className="custom-text">
      Да, можно. Информация об адресах и возможности сдачи – в открытых
      источниках.
    </p>
  </div>
);

export default Covid;
