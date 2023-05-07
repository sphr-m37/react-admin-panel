import React, { useState, useEffect, useContext } from 'react';
import { productContext } from '../../context/product/productContext';

import {
    InputAdornment,
    FormControl,
    TextField,
    Box, Modal,
    Typography
    , Button
} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 60,
    p: 4
};

export const ProductModal = () => {

    const {
        open,
        product,
        isEditing,
        productEdit,
        handleClose,
        productRemove,
    } = useContext(productContext)

    const [newInfo, setnewInfo] = useState({});

    useEffect(() => {
        if (product) {
            setnewInfo({ ...product })
        }
    }, [product])

    const onChangeHandler = e => {
        setnewInfo({
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

                {isEditing ? <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit <span className='alertText blueSpan'>{product.title}</span> Of <span className='alertText blueSpan'>{product.brand}</span>
                    </Typography>

                    <form >
                        <FormControl>
                            <TextField
                                id="standard-basic"
                                required
                                label="title"
                                defaultValue={product.title}
                                name='title'
                                variant="standard"
                                onChange={onChangeHandler}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>

                        <FormControl>
                            <TextField
                                id="standard-basic"
                                required
                                label="brand"
                                name='brand'
                                defaultValue={product.brand}
                                variant="standard"
                                onChange={onChangeHandler}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>

                        <FormControl>
                            <TextField
                                id="standard-basic"
                                label="price"
                                name='price'
                                defaultValue={product.price}
                                variant="standard"
                                onChange={onChangeHandler}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>
                        <div className='btnBox'>
                            <Button
                                className='modalButton'
                                onClick={handleClose} >
                                cancel
                            </Button>
                            <Button
                                className='modalButton'
                                onClick={() => productEdit(newInfo)}>
                                save
                            </Button>
                        </div>
                    </form >
                </Box>
                    :
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Are You Sure?
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                            <img src={product.img} className='productAvatar' alt="" />
                            <div>   Do You Want To Delete  <span className='alertText'>{product.title}</span> of  <span className='alertText'>{product.brand}</span>  brand ?
                            </div>

                        </Typography>
                        <Button onClick={()=>productRemove(product)} >delete</Button>
                        <Button onClick={handleClose}>cancel</Button>
                    </Box>}

            </Modal>
        </div>
    );
}