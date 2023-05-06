import React from 'react'

import { SingleFeature } from './SingleFeature';

export const Features = () => {
  return (
      <div className='features'>
      <SingleFeature title='sale'  total={125000} growth={1.8}  />
      <SingleFeature title='cost'  total={25000}  growth={2.3} />
      <SingleFeature title='income' total={100000}  growth={-1.1}  />
      </div>
  )
}
