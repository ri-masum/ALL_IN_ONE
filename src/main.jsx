import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },{
        path:"/addProduct",
        element:<AddProduct></AddProduct>
      },
      {
        path:"/mycart",
        element:<Cart></Cart>
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
