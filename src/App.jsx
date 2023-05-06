import React from 'react'

import { routes } from './routes'
import { useRoutes } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { SideBar } from './components/SideBar/SideBar'
import { ProductState } from './context/products/ProductState'

export const App = () => {
  const router = useRoutes(routes)

  return (
    <ProductState>
      <NavBar />
      <div className='container'>
        <SideBar />
       {router}
      </div>
    </ProductState>
  )
}
