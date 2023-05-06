import React from 'react'

export const TransActionsItem = ({ action }) => {
    
const{customer,img ,date,amount,status} = action

    return (
        <tr className='transActionItem'>
            <td className='customer'>
                <img className='customerImg'
                src={img} alt="" />
                <span>{customer}</span>
            </td>
            <td>{date}</td>
          <td>{amount}$</td>
          <td className={`${status}Action`}>{status}</td>
      </tr>
  )
}
