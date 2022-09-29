// import React from "react";
// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.4.0";
import "./assets/demo/demo.css?v=1.4.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
import Home from "./pages/Home";
import {
  Route,
  Switch,
  Redirect as DomRedirect,
  BrowserRouter,
} from "react-router-dom";
import Cwing from "./containers/CWing";
import IntRelWing from "./containers/IntRelWing";
import Rwing from "./containers/RWing"
import Verify from "./pages/Verify";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/cwing">
          <Cwing />
        </Route>
        <Route path="/intlrelwing">
          <IntRelWing />
        </Route>
        <Route path="/rwing">
          <Rwing />
        </Route>
        <Route path="/ugacadswing">
          <Rwing />
        </Route>
        <Route path="/" component={Verify} />
        <DomRedirect to="/"></DomRedirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
