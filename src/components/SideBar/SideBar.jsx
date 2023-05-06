import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import './SideBar.css';

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

export const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>
            dashboard
          </h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <NavLink to='/'
                className={({ isActive }) => isActive ? 'active' : ''}>
                <LineStyleIcon className='sidebarIcon' />
                <span>Home</span>
              </NavLink>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <TimelineIcon className='sidebarIcon' />
                <span>Analytics</span>
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <TrendingUpIcon className='sidebarIcon' />
                <span>Sales</span>
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
              <NavLink to='/userslist' className={({ isActive }) => isActive ? 'active' : ''}>
                <PeopleAltOutlinedIcon className='sidebarIcon' />
                <span>users</span>
              </NavLink>
            </li>
            <li className='sidebarListItem'>
              <NavLink to='/newuser' className={({ isActive }) => isActive ? 'active' : ''}>
                <PersonAddAltOutlinedIcon className='sidebarIcon' />
                <span>New User</span>
              </NavLink>
            </li>
            <li className='sidebarListItem'>
              <NavLink to='/products' className={({ isActive }) => isActive ? 'active' : ''}>
                <StoreIcon className='sidebarIcon' />
                <span>Products</span>
              </NavLink>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <ReceiptLongIcon className='sidebarIcon' />
                <span>Transactions</span>
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <SummarizeIcon className='sidebarIcon' />
                <span>Reports</span>
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
                <LineStyleIcon className='sidebarIcon' />
                <span>Mail</span>
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <MarkunreadIcon className='sidebarIcon' />
                <span>Mail</span>
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <SendIcon className='sidebarIcon' />
                <span>Feedback</span>
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <GradingIcon className='sidebarIcon' />
                <span>Transactions</span>
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <ChatIcon className='sidebarIcon' />
                <span>Message</span>
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
                <LineStyleIcon className='sidebarIcon' />
                <span>Mail</span>
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <MarkunreadIcon className='sidebarIcon' />
                <span>Mail</span>
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <SendIcon className='sidebarIcon' />
                <span>Feedback</span>
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <GradingIcon className='sidebarIcon' />
                <span>Transactions</span>
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link>
                <ChatIcon className='sidebarIcon' />
                <span>Message</span>
              </Link>
            </li>
          </ul>
        </div>


      </div>
    </div>
  )
}
