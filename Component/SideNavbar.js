//import useState hook to create menu collapse state
import React, { useState } from "react";
import classes from "../Component/Navbar.module.css"
import Link from "next/link"
// import MaterialDesignSwitchh from '../Component/Togle1'
import MaterialDesignSwitchh from "./Togle1";
import Membership from "./Data/MembershipData";



//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";


import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";


const Sidebar = () => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');



  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext text-center" style={{ width: "inherit" }}>
              {/* small and big change using menucollapse state */}
              <img className="my-5 imgw" src={'/Image 1.png'} onClick={menuIconClick} />
            </div>
            <div className="text-center mt-5">
              <img src={'/profileAvatar.png'} className="imgw" />
            </div>
            <div className="d-inline-flex"><p className="text-white fs-17 mt-3 mb-0">Tabish bin Tahir</p><img src={"/editLogo.png"} className="mx-2" />
            </div>
            <p className="fs-15" >tabish614@gmail.com</p>

            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <img src="./collapseIcon.svg" style={{width:'2.5rem'}} />
              ) : (
                <img src="./collapseIcon.svg" style={{width:'2.5rem'}} />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu className="fs-15" iconShape="square">
              <MenuItem icon={<img src={'/Icon material-dashboard.png'} />}>
                Dashboared overview
              </MenuItem>
              <div className="ms-4">
                <MenuItem icon={<img src={'/development.png'} />}>Market aprecation</MenuItem>
                <MenuItem icon={<img src={'/chart.png'} />}>Rental Growth</MenuItem>
                <MenuItem icon={<img src={'/bx-stats.png'} />}>Detail Statistics</MenuItem></div>

              <MenuItem icon={<img src={'/Icon material-attach-file.png'} />}>Resources</MenuItem>

              <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
              <MenuItem icon={<img src={'/Icon material-note.png'} />}>Notes</MenuItem>
              {/* <MenuItem icon={<BiCog />}>Settings</MenuItem> */}
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>

      </div>
    </>
  )
}
export default Sidebar