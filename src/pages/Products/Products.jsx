import React, { useContext, useEffect, useState } from 'react'

import './products.css'

import { DataGrid } from '@mui/x-data-grid';

import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ProductModal } from '../../components/Modal/ProductModal';


import { productContext } from '../../context/products/productContext'

export const Products = () => {

  const items = [{
    id: 1,
    title: 'shirt',
    brand: 'puma',
    img: './public/vite.svg',
    price: 90
  },
  {
    id: 2,
    title: 'shirt',
    brand: 'adidas',
    img: './public/vite.svg',
    price: 25

  },
  {
    id: 3,
    title: 'hat',
    brand: 'nike',
    img: './public/vite.svg',
    price: 50
  },
  {
    id: 4,
    title: 'coat',
    brand: 'nike',
    img: './public/vite.svg',
    price: 260
  }]

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "brand", headerName: "Brand", width: '120' },
    { field: "title", headerName: "title", width: '120' },
    {
      field: "price", headerName: "Price", width: '120',
      renderCell: (params) => {
        return (
          <>$ {params.row.price}</>
        )
      }
    },
    {
      field: "avatar", headerName: "Avatar",
      renderCell: (params) => {
        return (
          <img className='productAvatar' src={params.row.img} />
        )
      }
    },
    {
      field: "actions", headerName: "Actions",
      renderCell: (params) => {
        return (<div className='usersAction'>
          <DeleteOutlineOutlinedIcon onClick={() => actionHandler(params.row.id)} />
          <ModeEditOutlinedIcon onClick={() => actionHandler(params.row.id, true)} />
        </div>
        )
      }
    },
  ]

  useEffect(() => {
    document.title = 'Admin panel | Products'
  }, []);

  const [products, setProducts] = useState(items)
  const [isEditing, setIsEditing] = useState(false)
  const [product, setProduct] = useState({})
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);


  const actionHandler = (id, mode = false) => {
    handleOpen()
    setProduct(products.find(product => product.id === id))
    setIsEditing(mode)

  }


  const removeProductById = () => {
    setProducts(products.filter(item => item.id !== product.id))
    handleClose()
    dispatch({ type: 'test' })
  }

  const editProduct = (newInfo) => {
    const newProducts = [...products]
    const editingItemIndex = products.findIndex(product => product.id === newInfo.id)
    newProducts[editingItemIndex] = newInfo
    setProducts(newProducts)
  }


  return (
    <div className='products'>
      <DataGrid
        rows={products}
        columns={columns}
      />
      <ProductModal
        removeProductById={removeProductById}
        isEditing={isEditing}
        editProduct={editProduct}
        product={product}
        setOpen={setOpen}
        open={open}
      />
    </div>
  )
}
