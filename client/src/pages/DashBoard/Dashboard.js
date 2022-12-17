
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import OutboxIcon from '@mui/icons-material/Outbox';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "./Dashboard.css";
import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";



const Dashboard = () => {


  return (
    <div className="dashboard">
      <div className="left__sidebar__dashboard">
        <Sidebar Icon={DashboardIcon} title="Dashboard" link="/" />
        <Sidebar Icon={PictureAsPdfIcon} title="All_Record" link="/all_record" />
        <Sidebar Icon={FileUploadIcon} title="Upload File" link="/upload" />
        <Sidebar Icon={CallReceivedIcon} title="Message Recieved" link="/received" />
        <Sidebar Icon={OutboxIcon} title="Message Sent" link="/sent" />
        <Sidebar Icon={PersonIcon} title="Profile" link="/profile" />
        <Sidebar Icon={ExitToAppIcon} title="Logout" />
      </div>

      <div className="main__body__dashboard">
        <Container>
          <div className={styles.dashboard__header__name}>
            
            <Link to="/">User Dashboard</Link>
          </div>
        </Container>
        </div>
        </div>
        );
};


        
export default Dashboard;


