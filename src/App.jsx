import React from 'react'

import { routes } from './routes'
import { useRoutes } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { SideBar } from './components/SideBar/SideBar'
import { UserState } from './context/user/UserState'
import { ProductState } from './context/product/ProductState'

export const App = () => {
  const router = useRoutes(routes)

  return (
    <UserState>
      <ProductState>
      <NavBar />
      <div className='container'>
        <SideBar />
       {router}
      </div>
      </ProductState>
    </UserState>
  )
}
