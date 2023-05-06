import React, { useEffect, useState } from 'react'
import './UserList.css'


import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { UserModal } from '../../components/Modal/UserModal'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { DataGrid } from
'@mui/x-data-grid';




export const UserList = () => {

  useEffect(() => {
    document.title = 'Admin panel | Users'
  }, []);


  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: 'hadi',
      lastName: 'kuhi',
      email: '',
      img: './public/vite.svg',
      status: 'active',
      transAction: 1200
    },
    {
      id: 2,
      firstName: 'sara',
      lastName: 'azizi',
      email: '',
      img: './public/vite.svg',
      status: 'non-active',
      transAction: 0

    },
    {
      id: 3,
      firstName: 'mehdi',
      lastName: 'karimi',
      email: '',
      img: './public/vite.svg',
      status: 'active',
      transAction: 1950
    },
    {
      id: 4,
      firstName: 'sina',
      lastName: 'alizadeh',
      email: '',
      img: './public/vite.svg',
      status: 'active',
      transAction: 1560
    },
  ])


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
          <DeleteOutlineOutlinedIcon onClick={() => actionHandler(params.row.id)} />
          <ModeEditOutlinedIcon onClick={() => actionHandler(params.row.id, true)} />
        </div>
      }
    },
  ]

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [user, setUser] = useState({})
  const [isEditing, setIsEditing] = useState(false)

  const actionHandler = (userId, mode = false) => {
    const user = users.find(user => user.id === userId)
    setUser(user)
    setIsEditing(mode)
    handleOpen()
  }

  const removeUserById = () => {
    setUsers(users.filter(item => item.id !== user.id))
    handleClose()
  }

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
      <UserModal
        removeUserById={removeUserById}
        setIsEditing={setIsEditing}
        editeHandler={editeHandler}
        handleClose={handleClose}
        isEditing={isEditing}
        user={user}
        open={open} />
    </div>
  )
}
