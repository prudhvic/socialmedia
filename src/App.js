import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./Navbar";
import Cinema from "./components/Cinema";
import Sports from "./components/Sports";
import Tech from "./components/Tech";
function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/sports">
          <Sports />
        </Route>
        <Route path="/cinema">
          <Cinema />
        </Route>
        <Route path="/technews">
          <Tech />
        </Route>
      </Switch>
    </>
  );
}

export default App;
