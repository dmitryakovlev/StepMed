export interface ISupervisoryAuthority {
  id: number;
  img: string;
  name: string;
  address: string;
  url: string;
  phone: string;
  email: string;
}

export const supervisoryAuthority: ISupervisoryAuthority[] = [
  {
    id: 0,
    img: './images/sa/img_01.png',
    name: 'Министерство здравоохранения Российской Федерации',
    address: 'г. Москва, Рахмановский пер, д. 3, 127994, ГСП-4',
    url: 'http://www.rosminzdrav.ru',
    phone: '+7 (495) 627-24-00',
    email: 'info@rosminzdrav.ru',
  },
];
