import React, { useContext, useEffect, useState } from 'react';
import './Modal.css';

import {
    Box,
    Modal,
    Button,
    TextField,
    Typography,
    InputAdornment
} from '@mui/material';

import { AccountCircle } from '@mui/icons-material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { userContext } from '../../context/user/userContext';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const UserModal = () => {

    const {
        user: { firstName, lastName, email, img },
        editeHandler,
        handleClose,
        userRemov,
        isEditing,
        open,
        user,
    } = useContext(userContext)


    const [newInfo, setNewInfo] = useState({ firstName: "", lastName: "", email: "" })

    useEffect(() => {
        if (user) {
            setNewInfo({ ...user })
        }
    }, [user])


    const onchangeHandler = e => {
        setNewInfo({
            ...newInfo, [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={() => {
                    if (!isEditing) {
                        handleClose()
                    }
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                {isEditing ?
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Edit <span className='alertText blueSpan'>{firstName} {lastName}</span>
                        </Typography>
                        <form className='userEditForm'
                            onSubmit={() => editeHandler(user, newInfo)}
                        >
                            <TextField
                                id="standard-basic"
                                required label="first name"
                                name='firstName'
                                variant="standard"
                                defaultValue={firstName}
                                onChange={onchangeHandler}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                id="standard-basic"
                                required
                                label="last name"
                                name='lastName'
                                variant="standard"
                                defaultValue={lastName}
                                onChange={onchangeHandler}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                id="standard-basic"
                                label="Email"
                                name='email'
                                variant="standard"
                                defaultValue={email}
                                onChange={onchangeHandler}
                                helperText='example@email.com'
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <AlternateEmailIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </form>

                        <Button
                            className='modalButton'
                            onClick={() => editeHandler(newInfo)} >
                            save
                        </Button>

                        <Button
                            className='modalButton'
                            onClick={handleClose} >
                            cancel
                        </Button>

                    </Box>
                    :

                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Are You Sure ?
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <img src={img} className='userAvatar' />
                            <div>   Do You Want To Delete  <span className='alertText'>{firstName} {lastName}</span>
                            </div>
                        </Typography>
                        <Button className='modalButton'
                            onClick={() => userRemov(newInfo)} >delete</Button>
                        <Button className='modalButton'
                            onClick={handleClose} >cancel</Button>
                    </Box>
                }
            </Modal>
        </div>
    );
}