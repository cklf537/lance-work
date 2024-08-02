import { RouterProvider } from 'react-router-dom';
import { routes } from './router/router';
// import { AppRouter } from './model/model';
import { createBrowserRouter } from 'react-router-dom';
import { Categories, PostContext } from './data/context';
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { Posts } from './data/model';

function App() {

  const route = createBrowserRouter(routes);
  const [appData, setAppData] = useState<Posts[]>([]);

  useEffect(() => {
    async function GetData() {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const dt: Posts[] = await response.data;
      setAppData(dt);
    }
    GetData()



  }, [])

 

  return (
    <>
      <PostContext.Provider value={appData} >
        <Categories.Provider value={[]}>
          <RouterProvider router={route} />
        </Categories.Provider>
      </PostContext.Provider>
    </>
  );
}

export default App;
