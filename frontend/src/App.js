import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AgenciesList from "./pages/AgenciesList/AgenciesList";
import Login from "./pages/Login/Login";
import PrivateRoute from "./HOC/PrivateRoute";
import { useDispatch } from "react-redux";
import { loadUser } from "./actions/authActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch, loadUser]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={AgenciesList} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
