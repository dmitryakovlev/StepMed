import WhatsappIcon from '@icons/Whatsapp';
import InstagramIcon from '@icons/Instagram';
import NapopravkuIcon from '@icons/Napopravku';
import ProdoktorovIcon from '@icons/Prodoktorov';
import TwogisIcon from '@icons/Twogis';
import YandexIcon from '@icons/Yandex';

export interface IFooterContacts {
  id: number;
  url: string;
  icon: JSX.Element;
}

export const footerContacts: IFooterContacts[] = [
  { id: 0, url: '#', icon: <WhatsappIcon /> },
  { id: 1, url: '#', icon: <InstagramIcon /> },
  { id: 2, url: '#', icon: <NapopravkuIcon /> },
  { id: 3, url: '#', icon: <ProdoktorovIcon /> },
  { id: 4, url: '#', icon: <TwogisIcon /> },
  { id: 5, url: '#', icon: <YandexIcon /> },
];
