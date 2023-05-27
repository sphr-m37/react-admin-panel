import React from 'react'
import './TransActions.css'
import { TransActionsItem } from './TransActionsItem'


const transActions = [
  { id: 1, customer: 'sepehr', img: './public/vite.svg', amount: 99999, status: 'success', date: '04/30/2023' },
  { id: 1, customer: 'sina', img: './public/vite.svg', amount: 2654, status: 'pending', date: '06/10/2023' },
  { id: 1, customer: 'sara', img: './public/vite.svg', amount: 250, status: 'success', date: '05/30/2023' },
  { id: 1, customer: 'eric', img: './public/vite.svg', amount: 100, status: 'canceled', date: '11/05/2023' },
]



export const TransActions = () => {
  return (
    <div className='transActions'>
      <h4>Latest TransActions</h4>
      <table className='transActionTable' >
        <thead className='transActionTableHead'>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transActions.map(action => <TransActionsItem key={action.id} action={action} />)}
        </tbody>
      </table>
    </div>
  )
}
