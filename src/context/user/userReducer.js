import { EDIT_USER, GET_USERS, REMOVE_USER, SET_LOADING_TRUE } from '../types'


export const userReducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING_TRUE:
            return { ...state, loading: true }
        case GET_USERS:
            return { ...state, users: action.payload, loading: false }
        case REMOVE_USER:
            const id = (action.payload)
            return { ...state, users: state.users.filter(user => user.id !== id) }
        case EDIT_USER:
            const editedUser = action.payload
            const editedUserIndex = state.users.findIndex(user => user.id === editedUser.id)
            const newUsers = [...state.users]
            newUsers[editedUserIndex] = editedUser
            return { ...state, users: [...newUsers] }
        default:
            return state
    }
}