import Link from 'next/link';

const ZaochnayaKonsultaciya = () => (
  <div className="container">
    <h1>Заочная консультация</h1>
    <img src="/images/illustrations/online.webp" />

    <p className="custom-text-message warning">
      Дистанционная консультация не предназначена для оказания медицинской
      помощи пациентам, находящимся в критическом состоянии и нуждающимся в
      экстренной медицинской помощи.
    </p>

    <p className="custom-text">
      В Степмед клиник предоставляется услуга дистанционной консультации
      («второе мнение»).
    </p>

    <div className="custom-list">
      <p className="custom-list-heading">
        В каких случаях вы можете обратиться к нам за дистанционной
        консультацией:
      </p>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Отсутствует возможность очной консультации (находитесь в другом городе
          или пациент не транспортабелен).
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Необходимо получить «второе мнение».</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Не хотите ожидать очного приёма врача.</p>
      </div>
    </div>

    <div className="custom-list">
      <p className="custom-list-heading">
        Получить консультацию можно по двум направлениям:
      </p>
      <div className="mt-2 lg:mt-3">
        <p>
          1. Просмотр документов, присланных в электронном виде + консультация с
          применением видео/аудио связи.
        </p>
      </div>
      <div className="mt-2 lg:mt-3">
        <p>
          2. Посещение доверенных лиц пациента с его медицинскими документами.
        </p>
      </div>
    </div>

    <p className="custom-text-message">
      Просим обратить внимание, что результаты лабораторных исследований имеют
      срок терапевтической давности, превышение которого может привести к
      невозможности правильной их интерпретации. С данной информацией вы можете
      ознакомиться в разделе{' '}
      <Link href="/pravila-gospitalizacii">
        <a className="text-base font-bold text-primary custom-link md:text-lg lg:text-xl">
          правила госпитализации
        </a>
      </Link>
      {''}.
    </p>

    <h2 className="custom-title">
      Просмотр документов, присланных в электронном виде + консультация с
      применением видео/аудио связи.
    </h2>
    <div className="custom-list">
      <p className="custom-list-heading">Для проведения необходимо:</p>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          На электронную почту{' '}
          <a
            href="mailto:clinic@step-med.com"
            className="text-base font-bold text-primary custom-link md:text-lg lg:text-xl"
          >
            clinic@step-med.com
          </a>{' '}
          направить письмо, в теме которого указано: «Дистанционная
          консультация», ФИО пациента.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Во вложении приложены скан-копии или фотографии (сфотографированы в
          хорошем качестве, на которых видны края документа и пронумерованы в
          хронологическом порядке) медицинские документы (заключения врачей,
          выписные эпикризы из стационаров, результаты диагностических
          исследований, относящихся к текущему и сопутствующим заболеваниям),
          согласие на обработку персональных данных и доверенность на
          представление интересов пациента (если обращение исходит не от имени
          пациента).
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          В тексте письма указать причину обращения за дистанционной
          консультацией, текущее состояние пациента, контактную информацию.
        </p>
      </div>
    </div>
    <p className="custom-text">
      В таком случае ответ может быть дан в письменном виде или с применением
      видео/аудио связи (по вашему предпочтению) в течении 2-х дней. Оплата
      осуществляется согласно действующему прейскуранту по реквизиту клиники.
    </p>

    <h2 className="custom-title">
      Посещение доверенных лиц пациента с его медицинскими документами.
    </h2>
    <div className="custom-list">
      <p className="custom-list-heading">Для проведения необходимо:</p>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Записаться на очное посещение врача по телефону или через сайт.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Посетить клинику в назначенное время имея при себе медицинские
          документы пациента (заключения врачей, выписные эпикризы из
          стационаров, результаты диагностических исследований, относящихся к
          текущему и сопутствующим заболеваниям) и доверенность на представление
          интересов пациента. Документы можно предварительно прислать на
          электронную почту{' '}
          <a
            href="mailto:clinic@step-med.com"
            className="text-base font-bold text-primary custom-link md:text-lg lg:text-xl"
          >
            clinic@step-med.com
          </a>{' '}
          с указанием в теме: «Для очного приёма», ФИО пациента, дата
          консультации»
        </p>
      </div>
    </div>
    <p className="custom-text">
      По итогу консультации будет выдана медико-консультативное заключение.
      Оплата осуществляется согласно действующему прейскуранту.
    </p>
  </div>
);

export default ZaochnayaKonsultaciya;
