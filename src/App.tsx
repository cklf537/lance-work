import { RouterProvider } from 'react-router-dom';
import { routes } from './router/router';
// import { AppRouter } from './model/model';
import { createBrowserRouter } from 'react-router-dom';

function App() {
  const route = createBrowserRouter(routes);
  return (
    <>
    <div>
      <RouterProvider router={route} />
    </div>
    </>
  );
}

export default App;
