import React, { useEffect } from 'react'
import './Home.css'

import { NewUsersList } from '../../components/NewUsersList/NewUsersList'
import { TransActions } from '../../components/TransActions/TransActions'
import { saleData } from '../../datas'

import { Features } from '../../components/features/Features'
import { Chart } from '../../components/Chart/Chart'



export const Home = () => {

  useEffect(() => {
    document.title ='Admin panel | Home'
  }, []);

  return (
    <div className='home'>
      <Features />
      <Chart grid title='Sale Analytic' data={saleData} />
      <div className='newItems' >
        <NewUsersList />
        <TransActions />
      </div>
    </div>
  )
}
