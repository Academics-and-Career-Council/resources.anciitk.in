import React, { useEffect } from "react";
import { useHistory } from "react-router";

// core components
import HomeHeader from "../components/HomeHeader";
import HomeNavbar from "../components/HomeNavBar";
import Wings from "../components/Wings";
import Footer from "../components/Footer";

import { useRecoilState } from "recoil";
import { recoilSessionState } from "../pkg/recoilDeclarations";

function Home() {
  const [session] = useRecoilState(recoilSessionState);
  const history = useHistory();
  useEffect(() => {
    if (!session) {
      history.push("/?next=home");
    }
  }, [history]);

  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <HomeNavbar />
      <div className="wrapper">
        <HomeHeader />
        <div className="main">
          <Wings />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
