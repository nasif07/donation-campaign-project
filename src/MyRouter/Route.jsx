import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout';
import Home from '../MyPages/Home/Home';
import Donation from '../MyPages/Donation/Donation';
import Statistics from '../MyPages/Statistics/Statistics';
import DonationDetailes from '../MyPages/DonationDetailes/DonationDetailes';
import ErrorPage from '../MyPages/Error/ErrorPage'


const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
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
        },
        {
          path: "/donations/:id",
          element: <DonationDetailes></DonationDetailes>,
          loader: ()=>fetch('../../public/data.json')
        }
      ]
    },
  ]);


  export default route;