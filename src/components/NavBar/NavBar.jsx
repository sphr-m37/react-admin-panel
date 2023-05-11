import React from 'react'

import './NavBar.css'

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbarWrapper'>


                <div className='logo'>
                    PINKI SHOP
                </div>
                
                <div className='navbarRight'>

                    <div className='navBarIcons'>
                        <NotificationsActiveIcon />
                        <span>2</span>

                    </div>

                    <div className='navBarIcons'>
                        <LanguageIcon />
                        <span>3</span>

                    </div>

                    <div className='navBarIcons'>
                        < SettingsIcon />
                    </div>
                    <div className='avatar'>                    <img src='./public/vite.svg' alt="" />
                    </div>
                </div>


            </div>
        </div>
    )
}
