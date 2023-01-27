
import "./Dashboard.css";
import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import MainSidebar from "./MainSidebar/MainSidebar.js"



const Dashboard = () => {


  return (
    <div className="dashboard">
      <div className="left__sidebar__dashboard">
       <MainSidebar/>
      </div>

      <div className="main__body__dashboard"> 
        <Container>
          <div className={styles.dashboard__header__name}>
            
            <Link to="/">Staff Manager Dashboard</Link>
          </div>
        </Container>
        </div>
        </div>
        );
};


        
export default Dashboard;


