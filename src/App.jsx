import React from 'react'

import { routes } from './routes'
import { useRoutes } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { SideBar } from './components/SideBar/SideBar'

export const App = () => {
  const router = useRoutes(routes)

  return (
    <>
      <NavBar />
      <div className='container'>
        <SideBar />
       {router}
      </div>
    </>
  )
}
