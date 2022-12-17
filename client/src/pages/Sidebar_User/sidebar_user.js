import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import OutboxIcon from '@mui/icons-material/Outbox';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";


const sidebar_user = () => {
  return (
    <div className="left__sidebar__dashboard">
        <Sidebar Icon={DashboardIcon} title="Dashboard" link="/" />
        <Sidebar Icon={PictureAsPdfIcon} title="All_Record" link="/all_record" />
        <Sidebar Icon={FileUploadIcon} title="Upload File" link="/upload" />
        <Sidebar Icon={CallReceivedIcon} title="Message Recieved" link="/received" />
        <Sidebar Icon={OutboxIcon} title="Message Sent" link="/sent" />
        <Sidebar Icon={PersonIcon} title="Profile" link="/profile" />
        <Sidebar Icon={ExitToAppIcon} title="Logout" />
      </div>
  )
}

export default sidebar_user