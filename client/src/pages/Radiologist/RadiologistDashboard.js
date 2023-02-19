import React from 'react';
import "./Dashboard.css";
import styles from "./Dashboard.module.css";
import { Col, Container, Row } from "react-bootstrap";
import MainSidebar from "./MainSidebar/MainSidebar.js"
import { Paper, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

const RadiologistDashboard = () => {
    return (
      <div>
      <Container fluid>
        <Row>
          <Col md={2} sm={12} className={`d-none d-md-block`}>
            <MainSidebar />
          </Col>
          <Col md={10}>
            <Container className="mb-5">
              <Paper>
                <Typography
                  className="text-center text-primary py-5"
                  variant="h4"
                >
                 Welcome to Radiologist's Dashboard
                </Typography>
              </Paper>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
          );
};

export default RadiologistDashboard;