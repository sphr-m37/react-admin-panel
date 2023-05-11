import React, { useState } from 'react';

import { NavLink, Link } from 'react-router-dom';

import './SideBar.css';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TimelineIcon from '@mui/icons-material/Timeline';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import StoreIcon from '@mui/icons-material/Store';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SummarizeIcon from '@mui/icons-material/Summarize';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SendIcon from '@mui/icons-material/Send';
import GradingIcon from '@mui/icons-material/Grading';
import ChatIcon from '@mui/icons-material/Chat';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export const SideBar = () => {

  const activeLinkClassName = (isActive) => {
    if (isActive) {
      return 'active'
    }
  }

  const [showSlideBar, setShowSlideBar] = useState(true)

  return (<>
    <div className={`sidebar ${showSlideBar && 'closeMenu'}`}>
      <div className='iconBox'>  {
        showSlideBar ?
          <CloseIcon className='menuIcon' onClick={() => setShowSlideBar(!showSlideBar)} />


          :
          <div className='closeMenuIconBox'> <span>close</span>
            <MenuIcon className='menuIcon' onClick={() => setShowSlideBar(!showSlideBar)} />
          </div>
      }
      </div>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>

          <h3 className='sidebarTitle'>
            dashboard
          </h3>

          <ul className='sidebarList'>
            <li className='sidebarListItem' onClick={() => setShowSlideBar(true)}>
              <NavLink to='/'
                className={activeLinkClassName()} >
                <span>Home</span>
                <HomeOutlinedIcon />
              </NavLink>
            </li>
            <li className='sidebarListItem' onClick={() => setShowSlideBar(true)}>
              <NavLink to='/usersList' className={activeLinkClassName()}>
                <span>users</span>
                <PeopleAltOutlinedIcon className='sidebarIcon' />
              </NavLink>
            </li>
            <li className='sidebarListItem' onClick={() => setShowSlideBar(true)}>
              <NavLink to='/new-user' className={activeLinkClassName()}>
                <span>New User</span>
                <PersonAddAltOutlinedIcon className='sidebarIcon' />
              </NavLink>
            </li>
            <li className='sidebarListItem' onClick={() => setShowSlideBar(true)}>
              <NavLink to='/products' className={activeLinkClassName()}>
                <span>Products</span>
                <StoreIcon className='sidebarIcon' />
              </NavLink>
            </li>
            <li className='sidebarListItem' onClick={() => setShowSlideBar(true)}>
              <NavLink to='/new-product' className={activeLinkClassName()}>
                <span>New Product</span>
                <AddBusinessIcon className='sidebarIcon' />
              </NavLink>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <span>Analytics</span>
                <TimelineIcon className='sidebarIcon' />
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <span>Sales</span>
                <TrendingUpIcon className='sidebarIcon' />
              </Link>
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>
            Quick Menu
          </h3>
          <ul className='sidebarList'>

            <li className='sidebarListItem'>
              <Link>
                <span>Transaction</span>
                <ReceiptLongIcon className='sidebarIcon' />
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <span>Reports</span>
                <SummarizeIcon className='sidebarIcon' />
              </Link>
            </li>
          </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>
            Notifications
          </h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <Link>
                <span>Mail</span>
                <LineStyleIcon className='sidebarIcon' />
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <span>Mail</span>
                <MarkunreadIcon className='sidebarIcon' />
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <span>Feedback</span>
                <SendIcon className='sidebarIcon' />
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <span>Transactions</span>
                <GradingIcon className='sidebarIcon' />
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <span>Message</span>
                <ChatIcon className='sidebarIcon' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>)
}
