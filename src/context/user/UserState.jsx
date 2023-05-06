import { useReducer, useState } from 'react'
import { userContext } from './userContext'

import { EDIT_USER, REMOVE_USER } from '../types'



const init = {
    users: [
        {
            id: 1,
            firstName: 'hadi',
            lastName: 'kuhi',
            email: '',
            img: './public/vite.svg',
            status: 'active',
            transAction: 1200
        }
    ]
}

const userReducer = (state, action) => {
    switch (action.type) {
        case REMOVE_USER:
            const id = (action.payload.id)
            return { ...state, users: state.users.filter(user => user.id !== id) }
        case EDIT_USER:
            const info = action.payload
            console.log(info)
            const editingUserIndex = state.users.findIndex(user => user.id === info.id)
            const newUsers = [...state.users]
            newUsers[editingUserIndex] = info
            return {...state,users:[...newUsers]}
        default:
            return state
    }
}

export const UserState = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, init)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [user, setUser] = useState({})
    const [isEditing, setIsEditing] = useState(false)



    const actionHandler = (item, mode = false) => {
        handleOpen()
        const user = state.users.find(user => user.id === item.id)
        setUser(user)
        setIsEditing(mode)
    }

    const removeUser = user => {
        dispatch({ type: REMOVE_USER, payload: user })
        handleClose()
    }

    const editeHandler = (info) => {
        dispatch({ type: EDIT_USER, payload: info })
        handleClose()
    }

    return (
        <userContext.Provider value={{
            ...state,
            actionHandler,
            editeHandler,
            handleClose,
            removeUser,
            isEditing,
            open,
            user
        }}>
            {children}
        </userContext.Provider>
    )
}
