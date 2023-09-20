import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './components/Layout/Layout.jsx'
import Details from './components/Details/Details'
import Search from './components/Search/Search'
import Contacts from './components/Contacts/Contacts'
import Categories from './components/Categories/Categories'
import Ingredients from './components/Ingredients/Ingredients'
import Area from './components/Area/Area'
import Notfound from './components/Notfound/Notfound'
import CategoryDetails from './components/CategoryDetails/CategoryDetails'
import AreaDetails from './components/AreaDetails/AreaDetails'
import IngradientsDetails from './components/IngradientsDetails/IngradientsDetails'

let routers = createHashRouter([
  { path: "/",element:< Layout/> ,children:[
    {index:true,element: <Home/>},
    {path:'/:id',element: <Details/>},// id is a parameter has alot of values
    {path:'/categories/:category',element: <CategoryDetails/>},// id is a parameter has alot of values
    {path:'/area/:country',element: <AreaDetails/>},// id is a parameter has alot of values
    {path:'/ingredients/:ingredient',element:<IngradientsDetails/>},// id is a parameter has alot of values
    {path:'/search',element : <Search/>},
    {path:'/contact',element : <Contacts/>},
    {path:'/categories',element : <Categories/>},
    {path:'/ingredients',element : <Ingredients/>},
    {path:'/area',element : <Area/>},
    {path:'*',element : <Notfound/>},
  ]}
])

function App() {
  
  return (
    <>
    <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
