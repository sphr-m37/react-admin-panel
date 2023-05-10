import React, { useEffect, useState, useContext } from 'react'
import { userContext } from '../../context/user/userContext';
import { Loader } from '../../components/Loader/Loader';
import './UserList.css'

import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { UserModal } from '../../components/Modal/UserModal'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { DataGrid }
  from '@mui/x-data-grid';




export const UserList = () => {


const columns = [
  { field: 'id', headerName: "ID" },
  { field: 'username', headerName: "User Name",width:'120' },
  {
    field: 'name', headerName: "First Name", width: '120',
    renderCell: (params) => <span>{params.row.name.firstname}</span>
  },
  {
    field: 'lastName', headerName: "Last Name", width: '120',
    renderCell: (params) => <span>{params.row.name.lastname}</span> },
    { field: 'email', headerName: "Email", width: '150' },
    { field: 'password', headerName: "Password",width:"120" },
    {
      field: 'actions', headerName: "actions",
      renderCell: (params) => <div className='usersAction'>
          <DeleteOutlineOutlinedIcon
            onClick={() => actionHandler(params.row)} />
          <ModeEditOutlinedIcon
          onClick={() => actionHandler(params.row, true)} />
        </div>
    },
   
]
  
  
  useEffect(() => {
    document.title = 'Admin panel | Users'
  }, []);

  const {users,loading, actionHandler } = useContext(userContext)

  return (
    <div className='userList'>
     {loading ? <Loader /> : <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}/>}
      <UserModal />
      {loading && <Loader />}

    </div>
  )
}
