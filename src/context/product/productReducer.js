import { GET_PRODUCT_CATEGORIES, GET_PRODUCTS, PRODUCT_REMOVE, PRODUCT_EDITE, SET_LOADING_TRUE } from '../types'


export const productReducer = (state, action) => {
    switch (action.type) {

        case GET_PRODUCT_CATEGORIES:
            return { ...state, productCategories: action.payload }

        case SET_LOADING_TRUE:
            return { ...state, loading: true }

        case GET_PRODUCTS:
            return { ...state, products: action.payload, loading: false }

        case PRODUCT_REMOVE:
            const id = action.payload.id
            return { ...state, products: state.products.filter(product => product.id !== id) }

        case PRODUCT_EDITE:
            const editedProduct = action.payload
            console.log(editedProduct)
            const editedProductIndex = state.products.findIndex(product => product.id === editedProduct.id)
            const newProducts = [...state.products]
            newProducts[editedProductIndex] = editedProduct
            return { ...state, products: newProducts }

        default:
            return state
    }
}