import { RouterProvider } from 'react-router-dom';
import { routes } from './router/router';
import { createBrowserRouter } from 'react-router-dom';
import { AppContext, PostContext } from './data/context';
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { Posts } from './data/model';
import { appReducer, intitalState } from './appService';


function App() {

  const route = createBrowserRouter(routes);
  const [appData, setAppData] = useState<Posts[]>([]);

  const [state, dispatch] = useReducer(appReducer, intitalState);

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
        <AppContext.Provider value={state} >
          <RouterProvider router={route} />
        </AppContext.Provider>
      </PostContext.Provider>
    </>
  );
}

export default App;
