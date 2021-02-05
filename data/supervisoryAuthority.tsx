export interface ISupervisoryAuthority {
  id: number;
  img: string;
  name: string;
  address: string;
  url: string;
  phone: string;
  email?: string;
}

export const supervisoryAuthority: ISupervisoryAuthority[] = [
  {
    id: 0,
    img: './images/sa/img_01.png',
    name: 'Министерство здравоохранения Российской Федерации',
    address: 'г. Москва, Рахмановский пер, д. 3, ГСП-4, 127994',
    url: 'http://www.rosminzdrav.ru',
    phone: '+7 (495) 627-24-00',
    email: 'info@rosminzdrav.ru',
  },
  {
    id: 1,
    img: './images/sa/img_02.png',
    name: 'Федеральная служба по надзору в сфере здравоохранения',
    address: 'г. Москва, Славянская площадь, д.4, стр.1, 109074',
    url: 'http://roszdravnadzor.ru',
    phone: '+7 (495) 698-45-38',
    email: 'info@roszdravnadzor.ru',
  },
  {
    id: 2,
    img: './images/sa/img_02.png',
    name:
      'Территориальный орган РОСЗДРАВНАДЗОРА по г. Санкт-Петербургу и Ленинградской области',
    address:
      'г. Санкт-Петербург, наб. канала Грибоедова, д. 88-90, каб. 306, 190068',
    url: 'http://78reg.roszdravnadzor.ru',
    phone: '+7 (812) 314-67-89',
    email: 'info@reg78.roszdravnadzor.ru',
  },
  {
    id: 3,
    img: './images/sa/img_03.png',
    name:
      'Федеральной службы по надзору в сфере защиты прав потребителей и благополучия человека',
    address: 'г. Москва, Вадковский переулок, дом 18, строение 5 и 7, 127994',
    url: 'http://www.rospotrebnadzor.ru/',
    phone: '+7 (499) 973-26-90',
    email: 'depart@gsen.ru',
  },
  {
    id: 4,
    img: './images/sa/img_03.png',
    name:
      'Управление Федеральной службы по надзору в сфере защиты прав потребителей и благополучия человека по городу Санкт-Петербургу',
    address: 'г. Санкт-Петербург, ул. Стремянная, д. 19, 191025',
    url: 'http://78.rospotrebnadzor.ru',
    phone: '+7 (812) 764-42-38',
    email: 'uprav@78rospotrebnadzor.ru',
  },
  {
    id: 5,
    img: '',
    name:
      'Территориальный фонд обязательного медицинского страхования Санкт-Петербурга',
    address: 'г. Санкт-Петербург, ул. Коли Томчака, д. 9 лит. А, 196006',
    url: 'https://spboms.ru/',
    phone: '+7 (812) 703-73-10',
  },
  {
    id: 6,
    img: './images/sa/img_04.png',
    name: 'Прокуратура города Санкт-Петербурга',
    address: 'г. Санкт-Петербург, улица Почтамтская, дом 2/9, 190000',
    url: 'http://procspb.ru/',
    phone: '+7 (812) 315-48-53',
  },
];
