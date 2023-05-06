import React, { useEffect } from 'react'

import './Home.css'
import { Features } from '../../components/features/Features'
import { Chart } from '../../components/Chart/Chart'

import { xAxisData } from '../../datas'
import { NewUsersList } from '../../components/NewUsersList/NewUsersList'
import { TransActions } from '../../components/TransActions/TransActions'


export const Home = () => {

  useEffect(() => {
    document.title ='Admin panel | Home'
  }, []);

  return (
    <div className='home'>
      <Features />
      <Chart grid title='Sale Analytic' data={xAxisData} />
      <div className='newItems' >
        <NewUsersList />
        <TransActions />
      </div>
    </div>
  )
}
