export interface IPartnersLogo {
  id: number;
  url: string;
  image: string;
}

export const partnersLogo: IPartnersLogo[] = [
  {
    id: 0,
    url: 'https://www.niioncologii.ru/',
    image: '/images/partners/nmic.png',
  },
  {
    id: 1,
    url: 'https://lokod.ru/',
    image: '/images/partners/lokod.png',
  },
  {
    id: 2,
    url: 'https://www.invitro.ru/',
    image: '/images/partners/invitro.png',
  },
  {
    id: 3,
    url: 'https://itworks.group/',
    image: '/images/partners/it-works.png',
  },
  // {
  //   id: 4,
  //   url: 'https://longavitas.ru/',
  //   image: '/images/partners/longa-vita.png',
  // },
];
