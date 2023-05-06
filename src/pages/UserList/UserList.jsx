import React, { useEffect, useState, useContext } from 'react'
import { userContext } from '../../context/user/userContext';
import './UserList.css'

import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { UserModal } from '../../components/Modal/UserModal'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { DataGrid } from
'@mui/x-data-grid';




export const UserList = () => {


const columns = [
    { field: 'id', headerName: "ID" },
    { field: 'firstName', headerName: "First Name", width: '150' },
    { field: 'lastName', headerName: "Last Name", width: '150' },
    { field: 'email', headerName: "Email", width: '200' },
    { field: 'status', headerName: "status" },
    {
      field: 'transAction', headerName: "transactions",
      renderCell: (params) => {
        return <span className='usersTransAction'>$ {params.row.transAction}</span>
      }
    },
    {
      field: 'actions', headerName: "actions",
      renderCell: (params) => {
        return <div className='usersAction'>
          <DeleteOutlineOutlinedIcon onClick={() => actionHandler(params.row)} />
          <ModeEditOutlinedIcon onClick={() => actionHandler(params.row, true)} />
        </div>
      }
    },
]
  
  
  useEffect(() => {
    document.title = 'Admin panel | Users'
  }, []);

  const { actionHandler } = useContext(userContext)
  const { users } = useContext(userContext)
  const { open } = useContext(userContext)
  const { handleClose } = useContext(userContext)
 

  const editeHandler = newInfo => {
    const editingUserIndex = users.findIndex(user => user.id === newInfo.id)
    const newUsersList = [...users]
    newUsersList[editingUserIndex] = newInfo
    setUsers(newUsersList)
    handleClose()
  }

  return (
    <div className='userList'>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
      />
      <UserModal />
    </div>
  )
}
