import { AppLinks } from '@/types/appLinks';
import { Presentation, Home, Settings2 } from 'lucide-react';
import Linkedin from '../../../public/icons/linkedin.png';
import Facebook from '../../../public/icons/facebook.png';
import Youtube from '../../../public/icons/youtube.png';
import X from '../../../public/icons/TwitterX.png';

export const MainRoutes: AppLinks[] = [
  {
    title: 'Qui sommes nous',
    baseUrl: '/',
    items: [{
      content: 'A propos de nous',
      route: '/about',
    },
    {
      content: 'Conditions et politique',
      route: '/conditions',
    },
    {
      content: 'Aide et FAQ',
      route: '/aide',
    },
    {
      content: 'Nous Contacter',
      route: '/contact',
    },
  ]
  },
  {

    title: 'Arrivages',
    baseUrl: '/Arrivage',
    items: [{
      content: 'Homme',
      route: '/hommes',
    },
    {
      content: 'Femmes',
      route: '/femmes',
    },
    {
      content: 'Enfants',
      route: '/enfant',
    },
    {
      content: 'Beaute & hygiene',
      route: '/beaute',
    },
    {
      content: 'Electroique',
      route: '/electronique',
    },
    {
      content: 'Autres',
      route: '/autre',
    },

 
   ]
  }
];


// lien Reseau sociaux
export const SocialNetworks: AppLinks[] = [
  {
    title: 'LinkedIn',
    baseUrl: 'https://www.linkedin.com/company',
    CustomIcon: Linkedin,
  },
  {
    title: 'Facebook',
    baseUrl: 'https://www.facebook.com/company',
    CustomIcon: Facebook,
  },
  {
    title: 'X',
    baseUrl: 'https://www.x.com/company',
    CustomIcon: X,
  },
  {
    title: 'Youtube',
    baseUrl: 'https://www.youtube.com/company',
    CustomIcon: Youtube,
  },
];

export const Company: AppLinks[] = [
  {
    title: 'A propos de nous',
    baseUrl: '/aboutUs',
  },
  {
    title: 'Contact',
    baseUrl: '/contact',
  },
  {
    title: 'Mentions legales',
    baseUrl: '/legalNotices',
  },
  {
    title: "Termes d'utilisation",
    baseUrl: '/termsOfUse',
  },
];

export const AsideRoutes: AppLinks[] = [
  {
    title: 'Dashboard',
    children: [
      {
        title: 'Tableau de bord',
        baseUrl: '/dashboard',
        Icon: Presentation,
      },
      {
        title: 'Paramètres',
        baseUrl: '/setting',
        Icon: Settings2,
      },
    ],
  },
];

export const HomeRoute: AppLinks[] = [
  {
    title: "Retourner à l'acceuil",
    baseUrl: '/',
    Icon: Home,
  },
];
