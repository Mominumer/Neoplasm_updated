import React from 'react'
import Sidebar_user from "../Sidebar_User/sidebar_user"
import { Col, Container, Row } from "react-bootstrap";

function sent_mails() {
  return (
    <>
    <Sidebar_user/>
    <div className="main__body__dashboard">
        <Container>
          <h1>Send Mails</h1>
        </Container>
        </div>
    </>
  )
}

export default sent_mails