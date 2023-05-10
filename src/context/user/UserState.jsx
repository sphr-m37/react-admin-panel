import { useEffect, useReducer, useState } from 'react'
import axios from 'axios'

import { userContext } from './userContext'
import { userReducer } from './userReducer'

import {
EDIT_USER, GET_USERS,
REMOVE_USER,SET_LOADING_TRUE} from '../types'

const init = {
    users: []
    , loading: false
}



export const UserState = ({ children }) => {

    const [state, dispatch] = useReducer(userReducer, init)

    const [isEditing, setIsEditing] = useState(false)
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({})
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    useEffect(() => {
        getAllUsers()
    }, []);


    const getAllUsers = async () => {
        dispatch({ type: SET_LOADING_TRUE })
        const { data } = await axios.get(`https://fakestoreapi.com/users`)
        dispatch({ type: GET_USERS, payload: data })
    }


    const actionHandler = (user, mode = false) => {
        handleOpen()
        setUser(user)
        setIsEditing(mode)
    }

    const userRemov = async user => {
        const res = await axios.delete(`https://fakestoreapi.com/users/${user.id}`)
        if (res.status === 200) {
            dispatch({ type: REMOVE_USER, payload: user.id })
        }
        handleClose()
    }

    const editeHandler = async info => {
        const res = await axios.put(`https://fakestoreapi.com/users/${info.id}`, { info })
        if (res.status === 200) {
            dispatch({ type: EDIT_USER, payload: info })
        }
        handleClose()
    }

    return (
        <userContext.Provider value={{
            ...state,
            actionHandler,
            editeHandler,
            handleClose,
            userRemov,
            isEditing,
            open,
            user
        }}>
            {children}
        </userContext.Provider>
    )
}
