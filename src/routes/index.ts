import ContactIcon from '@mui/icons-material/ContactMail';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

import asyncComponentLoader from '@/utils/loader';

import { Routes } from './types';

const routes: Routes = [
  {
    component: asyncComponentLoader(() => import('@/pages/Home')),
    path: '/',
    title: 'Home',
    icon: HomeIcon,
  },
  {
    component: asyncComponentLoader(() => import('@/pages/Projects')),
    path: '/projects',
    title: 'Projects',
    icon: FolderIcon,
  },
  {
    component: asyncComponentLoader(() => import('@/pages/AboutUs')),
    path: '/about-us',
    title: 'About Us',
    icon: InfoIcon,
  },
  {
    component: asyncComponentLoader(() => import('@/pages/Contact')),
    path: '/contact',
    title: 'Contact',
    icon: ContactIcon,
  },
  {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
];

export default routes;
