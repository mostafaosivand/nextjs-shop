import { ILFlag } from '@components/icons/language/ILFlag';
import { SAFlag } from '@components/icons/language/SAFlag';
import { CNFlag } from '@components/icons/language/CNFlag';
import { USFlag } from '@components/icons/language/USFlag';
import { DEFlag } from '@components/icons/language/DEFlag';
import { ESFlag } from '@components/icons/language/ESFlag';
import { FaFlag } from 'react-icons/fa';

export const siteSettings = {
  name: 'Iran Razi',
  description:
    'شرکت شیمیایی رازی اصفهان  ، بزرگترین تامین و توزیع کننده محصولات شیمیایی صنعتی و آزمایشگاهی',
  author: {
    name: 'IRAN RAZI 2024',
    websiteUrl: 'https://iranrazi.ir',
    address: '',
  },
  logo: {
    url: '/assets/images/logo.png',
    alt: 'iranrazi',
    href: '/',
    width: 130,
    height: 56,
  },
  defaultLanguage: 'fa',
  currencyCode: '',
  site_header: {
    menu: [
      {
        id: 1,
        path: '/',
        label: 'فروشگاه'
      },
      {
        id: 2,
        path: '/search',
        label: 'menu-categories'
      },
      {
        id: 3,
        path: '/search',
        label: 'menu-dietary',
        subMenu: [
          {
            id: 1,
            path: '/search',
            label: 'menu-vegetarian',
          },
          {
            id: 2,
            path: '/search',
            label: 'menu-kakogenic',
          },
          {
            id: 3,
            path: '/search',
            label: 'menu-mediterranean',
          },
          {
            id: 4,
            path: '/search',
            label: 'menu-organic',
          },
        ],
      },
      {
        id: 4,
        path: '/search/',
        label: 'menu-search',
      },
      {
        id: 5,
        path: '/shops/',
        label: 'menu-shops',
      },
      {
        id: 6,
        path: '/',
        label: 'menu-pages',
        subMenu: [
          {
            id: 1,
            path: '/faq',
            label: 'سوالات پر تکرار',
          },
          {
            id: 1,
            path: '/404',
            label: 'صفحه 404'
          }
        ]
      },
    ],
    languageMenu: [
      {
        id: 'ar',
        name: 'عربى - AR',
        value: 'ar',
        icon: <SAFlag />,
      },
      {
        id: 'zh',
        name: '中国人 - ZH',
        value: 'zh',
        icon: <CNFlag />,
      },
      {
        id: 'en',
        name: 'English - EN',
        value: 'en',
        icon: <USFlag />,
      },
      {
        id: 'de',
        name: 'Deutsch - DE',
        value: 'de',
        icon: <DEFlag />,
      },
      {
        id: 'he',
        name: 'rעברית - HE',
        value: 'he',
        icon: <ILFlag />,
      },
      {
        id: 'es',
        name: 'Español - ES',
        value: 'es',
        icon: <ESFlag />,
      },
      {
        id: 'fa',
        name: 'Farsi - ES',
        value: 'fa',
        icon: <FaFlag />,
      }
    ],
  },
};
