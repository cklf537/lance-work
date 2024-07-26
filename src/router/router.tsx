import { AppRouter } from '../model/model';
import Landing from '../components/landing/landing';
import FindJob from '../components/findjob/findjob';
import Learning from '../components/learning/learning';
import ConnectWithCommunity from '../components/connectwithcommunity/connectwithcommunity';

const routes: AppRouter[] = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/findjob',
    element: <FindJob />,
  },
  {
    path: '/learning',
    element: <Learning />,
  },
  {
    path: '/connectwithcommunity',
    element: <ConnectWithCommunity />,
  },
];

export { routes };
