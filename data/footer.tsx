import InstagramIcon from '@icons/Instagram';
import NapopravkuIcon from '@icons/Napopravku';
import ProdoktorovIcon from '@icons/Prodoktorov';
import TwogisIcon from '@icons/Twogis';

export interface IFooterContacts {
  id: number;
  url: string;
  color?: string;
  icon: JSX.Element;
}

export const footerContacts: IFooterContacts[] = [
  {
    id: 0,
    url: 'https://www.instagram.com/stepmed_clinic/',
    icon: <InstagramIcon />,
  },
  {
    id: 1,
    url: 'https://spb.napopravku.ru/clinics/stepmed-klinik-poliklinika/',
    icon: <NapopravkuIcon />,
  },
  {
    id: 2,
    url: 'https://prodoctorov.ru/spb/lpu/72519-stepmed-klinik/',
    icon: <ProdoktorovIcon />,
  },
  { id: 3, url: 'https://go.2gis.com/ys33dt', icon: <TwogisIcon /> },
];
