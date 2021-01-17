import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({
  isAuthenticated,
  token,
  auth,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      token ? <Component {...props} /> : <Redirect to={"/login"} />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
});
export default connect(mapStateToProps)(PrivateRoute);
