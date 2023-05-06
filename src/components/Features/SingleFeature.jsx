import React from 'react'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import './Features.css'

export const SingleFeature = ({title,total,growth}) => {
  return (
    <div className='singleFeature'>
      <span className='featureTitle'>{title}</span>
      <div className='featureNumbers'>
        <span>$ {total}</span>
        <span> {growth > 0 ? '+' : ''} {growth} {growth > 0 ? <ArrowUpwardIcon className='growthIcon success' /> : <ArrowDownwardIcon className='growthIcon danger' />}</span>
      </div>
      <span className='featureDescription'>
        compared to last month
      </span>
    </div>
  )
}
