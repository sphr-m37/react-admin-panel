import React from 'react'

import { NewUsersListItem } from './NewUsersListItem'

import './NewUsersList.css'
const users = [
  { id: 1, userName: 'hadi', job: 'andriod developer', img: './public/vite.svg' },
  { id: 2, userName: 'reza', job: 'front-end developer', img: './public/vite.svg' },
  { id: 3, userName: 'ali', job: 'back-end developer', img: './public/vite.svg' },
  { id: 4, userName: 'sepehr', job: 'ios developer', img: './public/vite.svg' },
]

export const NewUsersList = () => {

  return (
    <div className='newUsersWrapper'>
      <h4>New Joined Users</h4>
      <ul className='newUserList'>
        {users.map(user => <NewUsersListItem key={user.id} user={user} />)}
      </ul>
    </div>
  )
}
