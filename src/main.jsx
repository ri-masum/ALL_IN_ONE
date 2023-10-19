import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import AddProduct from './components/AddProduct/AddProduct.jsx';
import Cart from './components/MyCart/Cart.jsx';
import SignUp from './components/SignUp and Login/SignUp.jsx';
import Signin from './components/SignUp and Login/Signin.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import PrivetRoute from './components/PrivetRoute/PrivetRoute.jsx';
import Error from './components/Error/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('/brand.json')
      },{
        path:"/addProduct",
        element:<PrivetRoute><AddProduct></AddProduct></PrivetRoute>
      },
      {
        path:"/mycart",
        element:<PrivetRoute><Cart></Cart></PrivetRoute>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/signin",
        element:<Signin></Signin>
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
