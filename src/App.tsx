import React from "react";
// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.4.0";
import "./assets/demo/demo.css?v=1.4.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
import Home from "./pages/Home";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Cwing from "./container/CWing";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/research">
          <Cwing/>
        </Route>
        <Redirect to="/home"></Redirect>
      </Switch>
      {/* <Redirect to="/home"></Redirect> */}
    </BrowserRouter>
  );
}

export default App;
