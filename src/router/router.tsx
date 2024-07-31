import { AppRouter } from '../model/model';
// import Landing from '../components/landing/landing';
import FindJob from '../components/findjob/findjob';
import Learning from '../components/learning/learning';
import ConnectWithCommunity from '../components/connectwithcommunity/connectwithcommunity';
import Landing from '../components/landing/landing';
import { RouteObject } from 'react-router-dom';
import Trending from '../components/treanding/treanding';
import Signup from '../components/signup/signup';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Landing />,
    children:[
      {
        path: '/referal',
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
      {
        path: '/treanding',
        element: <Trending />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ]
  },
  
];

export { routes };
