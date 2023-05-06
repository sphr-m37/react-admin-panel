import React, { useReducer } from 'react'

import { productContext } from './productContext'
// import { productReducer } from '../../reducer/productReducer'



const init = {
  items: []
}

const productReducer = (state = init, action) => {
  switch (action.type) {
    default:
      return state
  }
}



export const ProductState = ({ children }) => {

  const [state, dispatch] = useReducer(productReducer, init)


  return (
    <productContext.Provider value={{ ...state }}>
      {children}
    </productContext.Provider>
  )
}
