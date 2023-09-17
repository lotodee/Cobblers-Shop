import React from 'react'
import Cart from './pages/Cart'

import Home from './pages/Home'
import Login from './pages/Login'
import ProductList from './pages/ProductList'

import Register from './pages/Register'

import {createBrowserRouter , RouterProvider , Routes, Route,BrowserRouter as Router, Outlet} from "react-router-dom"
import ProductPage from './pages/ProductPage'
import CartProvider from "./CartContext"

const App = () => {

  // const Layout = () =>{
  //   return(
  //     <>
  //     <Outlet/> 
  //     </>
  //   )
  // }

  // const router = createBrowserRouter([

  //   {
  //     path:`/`,
  //     element:<Layout/>,
  //     children:[
  //       {
  //         path:'/',
  //         element:<Home/>
  //       },
  //       {
  //         path:'/cart',
  //         element:<Cart/>
  //       },
  //       {
  //         path:'/product',
  //         element:<ProductPage/>
  //       },
  //       {
  //         path:'/productlist',
  //         element:<ProductList/>
  //       },
  //       {
  //         path:'/register',
  //         element:<Register/>
  //       },
  //       {
  //         path:'/login',
  //         element:<Login/>
  //       },
  //     ]
  //   }
  // ])

  return (
 

<Router>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<ProductPage/>}/>

    </Routes>
</Router>

 
 

  )
}

export default App
