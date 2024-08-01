import { RouterProvider } from 'react-router-dom';
import { routes } from './router/router';
// import { AppRouter } from './model/model';
import { createBrowserRouter } from 'react-router-dom';
import { AppContext } from './data/context';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const route = createBrowserRouter(routes);
  const [appData, setAppData] = useState({});
  
  useEffect(()=>{

   async function GetData() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const dt = await response.data;
    setAppData(dt);
   }
   GetData()
   },[])
  return (
    
    <>
      <AppContext.Provider value={appData} >
        <RouterProvider router={route} />
      </AppContext.Provider>
    </>
  );
}

export default App;
