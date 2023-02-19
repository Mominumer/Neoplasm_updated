import { Button, Container, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Alert_Comp from "../../components/Alert/Alert_Comp";
import Spinner_comp from "../../components/Spinner/Spinner_comp";
import Toast_Comp from "../../components/Toast/Toast_Comp";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const EditPatient = () => {
  const [patientName, setpatientName] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [contactInfo, setcontactInfo] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const history = useHistory();
  const User=history.location.state.user;
  const {user} = useSelector((state) => state.auth);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("/patient/editpatient", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id:User._id,
        patientName,
        age,
        gender,
        contactInfo, 
      }), 
    })
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        console.log(result);
        if (result.errors) {
          setError(result.errors);
        } else {
          setToast(true);
          setError(null);
          setTimeout(() => {
             history.push("/Receptionist-dashboard");
          }, 3000);
          clearTimeout();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    
    User?setpatientName(User.patientName):setpatientName("");
    User?setage(User.age):setage("");
    User?setgender(User.gender):setgender("");
    User?setcontactInfo(User.contactInfo):setcontactInfo("")
  }, [User])

  return (
    <div style={{ fontFamily: "Poppins" }}>
      <Container>
        <Toast_Comp
          setToast={setToast}
          renderToast={toast}
          msg="edit successfull "
        />
        <Row>
          <Col md={6} className="mx-auto mt-4 ">
            <Paper className="p-4 shadow rounded">
              <Typography
                className="text-center text-primary mb-3"
                variant="h5"
              >
                Edit Patient info
              </Typography>
              {loading && <Spinner_comp />}
              {error && error.user && (
                <Alert_Comp variant="danger" msg={error.user} />
              )}

              <Form onSubmit={formSubmitHandler}>
                <Form.Group controlId="text">
                  <Form.Label>Patient name</Form.Label>
                  <Form.Control
                    onChange={(e) => setpatientName(e.target.value)}
                    type="text"
                    placeholder="Enter name"
                    value={patientName}
                  />
                  <span style={{ color: "red" }}>
                    {error && error.patientName}
                  </span>
                </Form.Group>
                <Form.Group controlId="text">
                  <Form.Label>Patient age</Form.Label>
                  <Form.Control
                    onChange={(e) => setage(e.target.value)}
                    type="text"
                    placeholder="Enter age"
                    value={age}
                  />
                  <span style={{ color: "red" }}>{error && error.age}</span>
                </Form.Group>
                <Form.Group controlId="text">
                  <Form.Label>Patient gender</Form.Label>
                  <Form.Control
                    onChange={(e) => setgender(e.target.value)}
                    type="text"
                    placeholder="Enter gender"
                    value={gender}
                  />
                  <span style={{ color: "red" }}>
                    {error && error.gender}
                  </span>
                </Form.Group>
                <Form.Group controlId="text">
                  <Form.Label>Patient contact number</Form.Label>
                  <Form.Control
                    onChange={(e) => setcontactInfo(e.target.value)}
                    type="text"
                    placeholder="Enter contact info"
                  />
                     <span style={{ color: "red" }}>
                    {error && error.contactInfo}
                  </span>
                  </Form.Group>

                  
                
                <Button
                  className="mt-2"
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Paper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditPatient;
