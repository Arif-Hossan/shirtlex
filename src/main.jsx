import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Layout/Main.jsx'
import Order from './components/Order/Order.jsx'
import Home from './components/Home/Home.jsx'
import Grandpa from './components/Grandpa/Grandpa.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=>fetch('tshirts.json')
      },
      {
        path:'/order',
        element:<Order></Order>
      },
      {
        path:'/grandpa',
        element:<Grandpa></Grandpa>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
