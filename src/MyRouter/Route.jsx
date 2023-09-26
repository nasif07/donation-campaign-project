import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout';
import Home from '../MyPages/Home/Home';
import Donation from '../MyPages/Donation/Donation';
import Statistics from '../MyPages/Statistics/Statistics';


const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      error: 'this is error',
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch('../../public/data.json')
        },
        {
            path: "/donation",
            element: <Donation></Donation>
        },
        {
            path: "/statistics",
            element: <Statistics></Statistics>
        }
      ]
    },
  ]);


  export default route;