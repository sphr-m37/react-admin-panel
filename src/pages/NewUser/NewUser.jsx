import React, { useEffect } from 'react'

import './NewUser.css'

export const NewUser = () => {

  useEffect(() => {
    document.title = 'Admin panel | New User'
  }, []);

  return (
    <div className='newUser'>Deploying...</div>
  )
}
