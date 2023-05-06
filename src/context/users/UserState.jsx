import React from 'react'

import { usersContext } from '../users/userContext'

export const UserState = ({children}) => {
  return (
      <usersContext.Provider>
          {children}
      </usersContext.Provider>
  )
}
