import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import AgenciesList from "./pages/AgenciesList/AgenciesList";
import { useMediaQuery } from "react-responsive";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div className="App">
      <MainNavbar />
      <AgenciesList />
    </div>
  );
}

export default App;
