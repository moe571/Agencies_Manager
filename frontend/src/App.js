import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import AgenciesList from "./pages/AgenciesList/AgenciesList";
import { useMediaQuery } from "react-responsive";
import Login from "./pages/Login/Login";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={AgenciesList} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
