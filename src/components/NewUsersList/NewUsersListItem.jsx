import React from 'react'

import VisibilityIcon from '@mui/icons-material/Visibility';

export const NewUsersListItem = ({ user }) => {
    const {id,userName,job,img }=user
  return (
      <li className='newUserItem'>
          <img className='newUserImg' src={img} alt="user pic" />
          <div className='newUserInfo'>
              <span className='newUserName'>{userName}</span>
              <span className='newUserPosition'>{job}</span>
          </div>
          <button>
              <VisibilityIcon className='visitIcon'/>
          </button>
      </li>
  )
}
