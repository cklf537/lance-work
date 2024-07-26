
import { createBrowserRouter } from 'react-router-dom';
import Landing from '../landing/landing';

const route =  [
    {
    path: "/",
    element: <Landing />,
   },
   {
    path: "/about",
    element: <div>about</div>,
   },
];
   
const router = createBrowserRouter(route);

export {router}