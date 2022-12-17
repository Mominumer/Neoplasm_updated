import React from 'react'
import Sidebar_user from "../Sidebar_User/sidebar_user"
import { Col, Container, Row } from "react-bootstrap";

function recieved_mails() {
  return (
    <>
    <Sidebar_user/>
    <div className="main__body__dashboard">
        <Container>
          <h1>Recieved Mails</h1>
        </Container>
        </div>
    </>
  )
}

export default recieved_mails