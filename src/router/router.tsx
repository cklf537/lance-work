import { AppRouter } from '../model/model';
// import Landing from '../components/landing/landing';
import FindJob from '../components/layout/findjob/findjob';
import Learning from '../components/layout/learning/learning';
import ConnectWithCommunity from '../components/layout/connectwithcommunity/connectwithcommunity';
import Landing from '../components/layout/landing/landing';
import { RouteObject } from 'react-router-dom';
import Trending from '../components/layout/treanding/treanding';
import Signup from '../components/layout/signup/signup';
import Home from '../components/common/_archive/home_old/home-old';
import Error from '../components/common/error';
import JobForm from '../components/common/jobform/jobform';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Landing />,
    // errorElement: <Error/>,
    children:[
      {
        path: '/',
        element: <Home />,
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
      {
        path:'/jobform',
        element:<JobForm />
      }
    ]
  },
  
];

export { routes };
