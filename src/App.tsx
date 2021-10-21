import React from "react";
// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.4.0";
import "./assets/demo/demo.css?v=1.4.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
import Home from "./pages/Home";
import { Route, Switch,Redirect as DomRedirect, BrowserRouter } from "react-router-dom";
import Cwing from "./container/CWing";
import Verify from "./pages/Verify";

// import { ory } from "../pkg/open-source";
// import Redirect from "@anciitk/kratos-verify-session";
// import "@anciitk/kratos-verify-session/dist/index.css";
// import { xenon } from "../pkg/xenon";
// import { useRecoilState } from "recoil";
// import { recoilSessionState } from "../pkg/recoilDeclarations";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/cwing">
          <Cwing/>
        </Route>
        <Route path="/" component={Verify} />
        <DomRedirect to="/"></DomRedirect>
      </Switch>
      {/* <Redirect to="/home"></Redirect> */}
    </BrowserRouter>
  );
}

export default App;
