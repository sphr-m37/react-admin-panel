import React, { useContext, useEffect } from 'react';
import { productContext } from '../../context/product/productContext';
import { Loader } from '../../components/Loader/Loader';

import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { ProductModal } from '../../components/Modal/ProductModal';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { DataGrid }
  from '@mui/x-data-grid';

import './products.css';

export const Products = () => {

  useEffect(() => {
    document.title = 'Admin panel | Products'
  }, []);

  const {
    loading,
    products,
    actionHandler,
    filterByCategory,
    productCategories
  } = useContext(productContext)

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "avatar", headerName: "Avatar",
      renderCell: (params) => <img className='productAvatar' src={params.row.image} />
    },
    {
      field: "title", headerName: "title", width: '200',
      renderCell: (params) => <span className='productTitle'>{params.row.title.split(' ').splice(0, 3).join(' ')}</span>
    },
    { field: "category", headerName: "category", width: '120' },
    {
      field: "price", headerName: "Price", width: '120',
      renderCell: (params) => <span>$ {params.row.price}</span>
    },
    {
      field: "actions", headerName: "Actions", width: '120',
      renderCell: (params) => <div className='usersAction'>
        <DeleteOutlineOutlinedIcon
          onClick={() => actionHandler(params.row)} />
        <ModeEditOutlinedIcon
          onClick={() => actionHandler(params.row, true)} />
      </div>
    },
  ]

  return (
    <div className='products'>
      <select onChange={filterByCategory} className='categotySelector'>
        <option value="" key="">all products</option>
        {
          productCategories.map((item, index) => <option value={item} key={index}>{item}</option>)
        }
      </select>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
      />
      <ProductModal />
      {loading && <Loader />}
    </div>
  )
}
