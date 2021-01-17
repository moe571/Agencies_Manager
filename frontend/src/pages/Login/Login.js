import React, { useState, useEffect } from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";

function Login({ isAuthenticated, error, auth, login, clearErrors, user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(null);

  const dispatch = useDispatch();
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };

    // Attempt to login
    login(user);
  };
  useEffect(() => {
    // Check for register error
    if (error.id === "LOGIN_FAIL") {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }
  }, [error]);
  if (isAuthenticated) {
    return <Redirect to={`/`} />;
  }
  return (
    <>
      <div className="loginContainer">
        <div className="form-container">
          <div className="brand-name">
            <h1>Dashu</h1>
          </div>
          <form className="loginForm">
            <div className="alert-box">
              {msg ? (
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {msg}
                </Alert>
              ) : null}
            </div>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={handleChangeEmail} type="email" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={handleChangePassword} type="password" />
            </Form.Group>
            <Button
              onClick={handleOnSubmit}
              className="mb-2"
              variant="primary"
              type="submit"
            >
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
          </form>
        </div>
        <div className="page-background"></div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  auth: state.user,
});

export default connect(mapStateToProps, { login, clearErrors })(Login);
