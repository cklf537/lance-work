import { AppRouter } from '../model/model';
// import Landing from '../components/landing/landing';
import FindJob from '../components/layout/findjob/findjob';
import Learning from '../components/layout/learning/learning';
import ConnectWithCommunity from '../components/layout/connectwithcommunity/connectwithcommunity';
import Landing from '../components/layout/landing/landing';
import { RouteObject } from 'react-router-dom';
import Trending from '../components/layout/treanding/treanding';
import Signup from '../components/layout/signup/signup';
import Home from '../components/layout/landing/home/home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Landing />,
    children:[
      {
        path: '/',
        element: <Home />
      },
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
