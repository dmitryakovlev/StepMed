const HimioterapiyaPoOMS = () => (
  <div className="container">
    <h1>Химиотерапия по ОМС</h1>
    <p className="custom-text">
      Под словом «химиотерапия» обычно понимают лекарственную противоопухолевую
      терапию, которая в себя включает непосредственно химиотерапию, таргетную
      терапию, гормонотерапию, иммунотерапию и сочетание их видов.
    </p>
    <p className="custom-text-message">
      ОМС (обязательное медицинское страхование) – система оплаты медицинской
      помощи в РФ, которая включает в себя гарантированный набор медицинских
      услуг, которые могут быть оказаны пациенту без взимания с него денежных
      средств.
    </p>
    <p className="custom-text">
      Степмед Клиник участвует в реализации Программы ОМС в части лекарственной
      противоопухолевой терапии ({''}
      <a
        href="/images/hpo/reestroviy_nomer.webp"
        className="custom-text-link"
        target="_blank"
      >
        реестровый номер – 780687
      </a>
      ). Поэтому в условиях нашей клиники возможно получение всех
      зарегистрированных высокоэффективных схем, включая иммунотерапию и
      таргетную терапию за счет средств ОМС.
    </p>
    <div className="custom-list">
      <p className="custom-list-heading">
        Для проведения лекарственной противоопухолевой терапии в Степмед Клиник
        в рамках ОМС необходимо:
      </p>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Наличие показаний к проведению лекарственной противоопухолевой
          терапии.
        </p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Отсутствие противопоказаний к ее проведению.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Наличие действующего полиса ОМС.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>
          Направление из медицинской организации, выбранной для оказания
          первичной помощи (поликлиники по месту жительства, а также направление
          может выдать онколог первичного онкологического кабинета, центра
          амбулаторной онкологической помощи либо онкологического диспансера).
        </p>
      </div>
    </div>
    <p className="custom-text">
      Действующий полис ОМС выглядит следующим образом:
      <img className="mt-4" src="/images/hpo/polis.webp" />
    </p>
    {/* <p className="custom-text">Направление:</p> */}
    <p className="custom-text-message warning">
      Обращаем внимание, что направление должно быть выдано именно на
      госпитализацию и именно в ООО «Степмед Клиник». Направление, которое
      выдано в иную медицинскую организацию или в направлении отмечено
      «консультация» или «обследование» - не подойдет.
    </p>
    <p className="custom-text">
      Кроме того, направление должно быть выдано медицинской организацией того
      региона, где застрахован пациент. Пациент, застрахованный в Ярославской
      области, должен предоставить направление из медицинской организации
      Ярославской области, а пациент, застрахованный в Алтайском крае – из
      Алтайского края. Направления, выданные медицинскими организациями вне
      региона страхования, не могут быть приняты для оказания противоопухолевого
      лечения.
    </p>

    <p className="custom-text">
      Узнать информацию о своем полисе вы можете на сайте территориального фонда
      Вашего региона{' '}
      <a
        href="https://www.ttfoms.tomsk.ru/page/spisok_territorialnyh_fondov_oms_subektov_rf"
        className="custom-text-link"
        target="_blank"
      >
        (список всех территориальных фондов)
      </a>{' '}
      или позвонив в свою страховую компанию, название и номер телефона которой
      указаны в полисе.
    </p>
  </div>
);

export default HimioterapiyaPoOMS;
