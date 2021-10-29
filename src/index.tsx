import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RelayEnvironmentProvider } from "react-relay";
import GA4React from "ga-4-react";

import Environment from "./graphql/environment";
import { RecoilRoot } from "recoil";

const ga4react = new GA4React("G-WK2PMRSK9H");

(async () => {
  await ga4react.initialize();

  ReactDOM.render(
    <React.StrictMode>
      <RecoilRoot>
        <RelayEnvironmentProvider environment={Environment}>
          <App />
        </RelayEnvironmentProvider>
      </RecoilRoot>
    </React.StrictMode>,
    document.getElementById("root")
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
