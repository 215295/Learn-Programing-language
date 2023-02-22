import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";


import Register from "../Pages/Register/Register";

import Checkout from "../Pages/Showed/Checkout/Checkout";
import Details from "../Pages/Showed/Details/Details";
import ErrorPage from "../Pages/Showed/ErrorPage/ErrorPage";
import PrivateRouter from "./PrivateRouter/PrivateRouter";



export const router = createBrowserRouter([
    {path:'/', element: <Main></Main>, errorElement: <ErrorPage />, children:[

      {path:'/', element:<Home></Home>},
      {path:'/home', element:<Home></Home>},
      {path:'/courses', element:<Courses></Courses>},
      {path:'/faq', element:<FAQ></FAQ>},
      {path:'/blog', element:<Blog></Blog>},      
      {path:'/register', element:<Register></Register>},
      {path:"/login", element:<Login></Login>},

      {
        path: '/details/:id', element:  <Details></Details> ,

        loader: ({ params }) => fetch(`https://learn-news-server.vercel.app/courses/${params.id}`)
    },

      {
          path:'/checkout/:id', element: <PrivateRouter> <Checkout></Checkout> </PrivateRouter>,
          loader: ({ params }) => fetch(`https://learn-news-server.vercel.app/courses/${params.id}`)
        },

    
        

      

  
        

      
    ]}
])