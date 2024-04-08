import { lazy } from 'react';

import Layout from '../pages/_layout';
import NotFoundPage from '../pages/NotFoundPage';
import { path } from './path';

const CodeArchivePage = lazy(() => import('../pages/CodeArchivePage'));
const MainPage = lazy(() => import('../pages/MainPage'));

export const routes = [
  {
    path: path.root,
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: path.codeArchive, element: <CodeArchivePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
