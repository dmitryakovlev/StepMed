const DokumentiILicenzii = () => (
  <div className="container">
    <h1>Документы и лицензии</h1>

    <h2 className="custom-title">Лицензия</h2>
    <div className="license__block">
      <img className="license__image" src="/images/licenses/license_01.webp" />
      <img className="license__image" src="/images/licenses/license_02.webp" />
      <img className="license__image" src="/images/licenses/license_03.webp" />
    </div>
    <div className="mt-2 ">
      <a
        href="/pdfs/Licenziya.pdf"
        className="custom-text-link"
        target="_blank"
      >
        Открыть в формате PDF
      </a>
    </div>

    <h2 className="custom-title">Санитарно-эпидемиологическое заключение</h2>
    <div className="license__block">
      <img className="license__image" src="/images/licenses/sez_01.webp" />
      <img className="license__image" src="/images/licenses/sez_02.webp" />
    </div>
    <div className="mt-2 ">
      <a href="/pdfs/SEZ.pdf" className="custom-text-link" target="_blank">
        Открыть в формате PDF
      </a>
    </div>
  </div>
);

export default DokumentiILicenzii;
