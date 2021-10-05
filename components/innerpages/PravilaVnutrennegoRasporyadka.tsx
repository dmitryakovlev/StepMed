import AvailableIcon from '@components/icons/Available';
import UnavailableIcon from '@components/icons/Unavailable';

const PravilaVnutrennegoRasporyadka = () => (
  <div className="container">
    <h1>Правила внутреннего распорядка</h1>
    <img src="/images/illustrations/rules.webp" />
    <p className="custom-text">
      Пребывание в клинике и проведение лечения должны быть максимально
      комфортными как для пациентов и сопровождающих их лиц, так и для персонала
      клиники. С этой целью мы разработали простые правила, которые позволят
      сделать посещение клиники максимально удобным.
    </p>
    <div className="flex items-center custom-title">
      <AvailableIcon />
      <h2 className="text-primary">Что разрешается делать:</h2>
    </div>
    <div className="custom-list custom-list-green">
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Прибывать на прием и лечение заблаговременно.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>При входе надевать бахилы.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Следовать рекомендациям персонала клиники.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Ограничить использование электронных приборов и средств связи при
          общении с сотрудниками клиники.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Бережно относиться к медицинской документации.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Уважительно относиться к сотрудникам клиники и другим пациентам.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Использовать средства индивидуальной защиты и соблюдать социальную
          дистанцию.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Если Вы опаздываете на прием или не можете прибыть на него -
          пожалуйста сообщите об этом сотрудникам клиники.
        </p>
      </div>
    </div>

    <div className="flex items-center custom-title">
      <UnavailableIcon />
      <h2 className="text-red-400">Что запрещается делать:</h2>
    </div>

    <div className="custom-list custom-list-red">
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Проносить огнестрельное, газовое и холодное оружие, ядовитые,
          радиоактивные, химические и взрывчатые вещества, спиртные напитки и
          иные предметы и средства, наличие которых, либо их применение
          (использование) может представлять угрозу для безопасности окружающих.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Употреблять спиртные напитки и курить.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Находиться в служебных помещениях учреждения без разрешения
          Администрации.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Громко разговаривать, шуметь.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Оставлять несовершеннолетних детей без присмотра.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Выносить из учреждения документы, полученные для ознакомления.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Изымать какие-либо документы из медицинских карт, со стендов и из
          папок информационных стендов.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Размещать в помещениях и на территории учреждения объявления без
          разрешения Администрации.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Производить фото- и видеосъемку без предварительного разрешения
          администрации учреждения.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Находиться в помещениях клиники в верхней одежде, грязной обуви.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Находиться на территории учреждения во внешний вид, не отвечающим
          санитарно-гигиеническим требованиям.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Запрещается проявлять агрессивное поведение по отношению к персоналу
          учреждения или пациентам учреждения.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Покидать палату во время врачебного обхода, выполнения назначений и
          процедур.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Осуществлять телефонные звонки посредством функции «громкая связь» и
          использовать телефон с включенным звонком.
        </p>
      </div>
    </div>

    <p className="custom-text">
      С полным текстом правил внутреннего распорядка Вы можете{' '}
      <a
        href="/pdfs/Pravila-vnutrennego-rasporyadka.pdf"
        className="custom-text-link"
        target="_blank"
      >
        ознакомиться по ссылке.
      </a>
    </p>

    <div className="mt-2 "></div>
  </div>
);

export default PravilaVnutrennegoRasporyadka;
