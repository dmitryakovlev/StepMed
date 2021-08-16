import { useState, useEffect } from 'react';
import { FooterContactsBlock } from '@components/shared/Footer';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import { Disclosure } from '@headlessui/react';
import classNames from 'classnames';

const Contacts = () => {
  const [windowSize, setWindowSize] = useState({
    height: 500,
  });

  useEffect(() => {
    const handleResize = () => {
      let height = windowSize.height;
      let width = window.innerWidth;

      if (width <= 800) {
        height = 300;
      }

      setWindowSize({ height });
    };

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container">
      <h1>Контакты</h1>

      <div className="flex flex-col lg:flex-row lg:items-center custom-title">
        <div className="flex-shrink-0 mb-8 lg:mb-0">
          <FooterContactsBlock color="text-text-primary" />
        </div>
        <YMaps>
          <Map
            defaultState={{
              center: [59.956048, 30.409544],
              zoom: 17,
              controls: [],
            }}
            width="100%"
            height={windowSize.height}
          >
            <Placemark geometry={[59.956048, 30.409544]} />
            <ZoomControl options={{ float: 'right' }} />
          </Map>
        </YMaps>
      </div>

      <h2 className="custom-title">Как к нам добраться</h2>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="mt-8 custom-accordion">
              <p className="custom-accordion-text">
                От станции метро "Чернышевская"
              </p>
              <p
                className={classNames('custom-accordion-icon', {
                  'custom-accordion-icon-close': open,
                })}
              ></p>
            </Disclosure.Button>
            <Disclosure.Panel className="custom-accordion-container">
              <img
                className="custom-accordion-img"
                src="/images/contacts/C01.webp"
              />
              <img
                className="custom-accordion-img"
                src="/images/contacts/C02.webp"
              />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="custom-accordion">
              <p className="custom-accordion-text">
                От станции метро "Ладожская"
              </p>
              <p
                className={classNames('custom-accordion-icon', {
                  'custom-accordion-icon-close': open,
                })}
              ></p>
            </Disclosure.Button>
            <Disclosure.Panel className="custom-accordion-container">
              <img
                className="custom-accordion-img"
                src="/images/contacts/L01.webp"
              />
              <img
                className="custom-accordion-img"
                src="/images/contacts/L02.webp"
              />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="custom-accordion">
              <p className="custom-accordion-text">
                От станции метро "Площадь Ленина"
              </p>
              <p
                className={classNames('custom-accordion-icon', {
                  'custom-accordion-icon-close': open,
                })}
              ></p>
            </Disclosure.Button>
            <Disclosure.Panel className="custom-accordion-container">
              <img
                className="custom-accordion-img"
                src="/images/contacts/P01.webp"
              />
              <img
                className="custom-accordion-img"
                src="/images/contacts/P02.webp"
              />
              <img
                className="custom-accordion-img"
                src="/images/contacts/P03.webp"
              />
              <img
                className="custom-accordion-img"
                src="/images/contacts/P04.webp"
              />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Contacts;
