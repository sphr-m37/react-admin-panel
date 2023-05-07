import React, { useContext, useEffect, useState } from 'react';
import { productContext } from '../../context/product/productContext';

import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { ProductModal } from '../../components/Modal/ProductModal';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineOutlinedIcon from
  '@mui/icons-material/DeleteOutlineOutlined';

import './products.css';

export const Products = () => {


  useEffect(() => {
    document.title = 'Admin panel | Products'
  }, []);

  const { products, actionHandler } = useContext(productContext)

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
          <DeleteOutlineOutlinedIcon onClick={() => actionHandler(params.row)} />
          <ModeEditOutlinedIcon onClick={() => actionHandler(params.row, true)} />
        </div>
        )
      }
    },
  ]


  return (
    <div className='products'>
      <DataGrid
        rows={products}
        columns={columns}
      />
      <ProductModal/>
    </div>
  )
}
