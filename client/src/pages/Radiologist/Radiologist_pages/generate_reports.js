import React from 'react'
import { Paper, Typography } from "@material-ui/core";
import { Col, Container, Row } from "react-bootstrap";
import MainSidebar from "../MainSidebar/MainSidebar";

const generate_reports = () => {
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
               Generate Report Here !
              </Typography>
            </Paper>
          </Container>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default generate_reports