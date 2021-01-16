import React from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
function Login() {
  return (
    <>
      <div className="loginContainer">
        <div className="form-container">
          <div className="brand-name">
            <h1>Dashu</h1>
          </div>
          <Form className="loginForm">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button className="mb-2" variant="primary" type="submit">
              Login
            </Button>
            <Form.Group className="formActions" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
              <a
                style={{ fontSize: "12px", color: "#126cfb", marginTop: "5px" }}
              >
                Forgot your password?
              </a>
            </Form.Group>
          </Form>
        </div>
        <div className="page-background"></div>
      </div>
    </>
  );
}

export default Login;
