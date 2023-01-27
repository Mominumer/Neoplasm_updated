
import React from 'react'
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import Sidebar from "../../../../components/Sidebar/Sidebar";


import ExitToAppIcon from "@material-ui/icons/ExitToApp";


const MainSidebar = () => {
  return (
    <div>
    <Sidebar Icon={DashboardIcon} title="Dashboard" link="/" />
       <Sidebar Icon={PersonIcon} title="Receptionist" link="/Receptionist_Info" />
       <Sidebar Icon={PersonIcon} title="Doctors" link="/Doctor_Info" />
       <Sidebar Icon={PersonIcon} title="Radiologists" link="/Radiologist_Info" />
      
       <Sidebar Icon={ExitToAppIcon} title="Logout" />
   </div>
  )
}

export default MainSidebar

