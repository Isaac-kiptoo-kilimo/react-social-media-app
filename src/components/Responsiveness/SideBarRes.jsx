import React from 'react'
import SideProfile from '../sidebar/SideProfile'
import SideItems from '../sidebar/SideItems'
import ShortCuts from '../sidebar/ShortCuts'
import './SideBarRes.scss'

const SideBarRes = () => {
  return (
    <div className="res-sidenav">
      
      <div className="res-SideProfile">
        <SideProfile />
      </div>
      <div className="res-sidenav-menu">
        <SideItems />
      </div>
      <div className="res-sidebar-shortCuts">
        <ShortCuts />
      </div>
    </div>
  );
};

export default SideBarRes
