import React, { useEffect, useReducer, useState } from 'react'
import { productContext } from './productContext'
import { productReducer } from './productReducer'

import { GET_PRODUCT_CATEGORIES, GET_PRODUCTS, PRODUCT_REMOVE, PRODUCT_EDITE, SET_LOADING_TRUE } from '../types'
import axios from 'axios'

const init = {
    products: [],
    productCategories: [],
    loading: false
}




export const ProductState = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, init)

    const [product, setProduct] = useState({})
    const [open, setOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);


    useEffect(() => {
        getAllProducts()
    }, [])
    
    useEffect(() => {
        getProductCategories()
    }, [])


    const getProductCategories = async () => {
        const { data } = await axios.get(`https://fakestoreapi.com/products/categories`)

        dispatch({ type: GET_PRODUCT_CATEGORIES, payload: data })
    }


    const getAllProducts = async () => {
        dispatch({ type: SET_LOADING_TRUE })
        const { data } = await axios.get(`https://fakestoreapi.com/products`)
        dispatch({ type: GET_PRODUCTS, payload: data })

    }
    const actionHandler = (product, mode = false) => {
        handleOpen()
        setProduct(product)
        setIsEditing(mode)
    }

    const productRemove = async product => {
        const res = await axios.delete(`https://fakestoreapi.com/products/${product.id}`)
        if (res.status === 200) {
            dispatch({ type: PRODUCT_REMOVE, payload: product })
            handleClose()
        }
    }

    const productEdit = async info => {
        
        const newInfo = {
            title: info.title,
            price: info.price,
            description: info.description,
            image: info.image,
            category:info.category
        }
        
        const res = await axios.put(`https://fakestoreapi.com/products/${info.id}`, JSON.stringify(newInfo))
        
        if (res.status === 200) {
            dispatch({ type: PRODUCT_EDITE, payload: info })
        }
        handleClose()
    }

    const filterByCategory = async e => {
        const category = e.target.value
        if (category !== '') {
            dispatch({ type: SET_LOADING_TRUE })
            const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
            if (res.status === 200) {
                dispatch({ type: GET_PRODUCTS, payload: res.data })
            }
        } else {
            getAllProducts()
        }
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
            productRemove,
            filterByCategory
        }}>
            {children}
        </productContext.Provider>
    )
}
