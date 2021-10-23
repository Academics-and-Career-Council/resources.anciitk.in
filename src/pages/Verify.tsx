import React from "react";
import { ory } from "../pkg/open-source";
import Redirect from "@anciitk/kratos-verify-session";
import "@anciitk/kratos-verify-session/dist/index.css";
import { xenon } from "../pkg/xenon";
import { useRecoilState } from "recoil";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import { useHistory } from "react-router";

interface props {
  location: {
    pathname: string;
    search: string;
    hash: string;
    key: string;
  }
}

const Component: React.FC<props> = ({location}) => {
  const history = useHistory();
  const [session, setSession] = useRecoilState(recoilSessionState);
  let param: string = location.search.substring(6, location.search.length);
  if (!param) {
    param = "home";
  }
  return (
    <Redirect
      loginUrl={`${process.env.REACT_APP_ACCOUNTS_BASE_URL}/login`}
      historyPush={history.push}
      sessionState={session}
      setSessionState={setSession}
      basePath={`${process.env.REACT_APP_PUBLIC_BASE_URL}`}
      path={param as string}
      ory={ory}
      xenon={xenon}
    />
  );
};

export default Component;
