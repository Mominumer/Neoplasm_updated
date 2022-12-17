import React from 'react'
import Sidebar_user from "../Sidebar_User/sidebar_user"
import { Col, Container, Row } from "react-bootstrap";

function all_record() {
  return (
    <>
    <Sidebar_user/>
    <div className="main__body__dashboard">
        <Container>
          <h1>Upload</h1>
        </Container>
        </div>
    </>
  )
}

export default all_record