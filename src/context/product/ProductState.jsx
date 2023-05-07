import React, { useReducer, useState } from 'react'
import { productContext } from './productContext'

import { PRODUCT_REMOVE, PRODUCT_EDITE } from '../types'

const init = {
    products: [{
        id: 1,
        title: 'shirt',
        brand: 'puma',
        img: './public/vite.svg',
        price: 90
    }]
}

const productReducer = (state, action) => {
    switch (action.type) {
        case PRODUCT_REMOVE:
            const id = action.payload.id
            return { ...state, products: state.products.filter(product => product.id !== id) }
        case PRODUCT_EDITE:
            const editedProduct = action.payload
            const editedProductIndex = state.products.findIndex(product => product.id === editedProduct.id)
            const newProducts = [...state.products]
            newProducts[editedProductIndex] = editedProduct
            return { ...state, products: newProducts }
        default:
            return state
    }
}


export const ProductState = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, init)


    const [product, setProduct] = useState({})
    const [open, setOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);


    const actionHandler = (product, mode = false) => {
        handleOpen()
        setProduct(product)
        setIsEditing(mode)
    }

    const productRemove = product => {
        dispatch({ type: PRODUCT_REMOVE, payload: product })
        handleClose()
    }
    const productEdit = newInfo => {
        dispatch({ type: PRODUCT_EDITE, payload: newInfo })
        handleClose()
    }


    return (
        <productContext.Provider value={{
            ...state,
            open,
            product,
            isEditing,
            productEdit,
            handleClose,
            actionHandler,
            productRemove
        }}>
            {children}
        </productContext.Provider>
    )
}
