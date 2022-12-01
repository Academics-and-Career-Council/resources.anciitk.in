import { useHistory } from "react-router";
import { useEffect } from "react";

// core components
import HomeHeader from "../components/HomeHeader";
import HomeNavbar from "../components/HomeNavBar";
import Wings from "../components/Wings";
import Footer from "../components/Footer";

import { useRecoilState } from "recoil";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import { scrollToSection } from "../pkg/heplers";

function Home() {
  const [session] = useRecoilState(recoilSessionState);
  const history = useHistory();

  if (!session) {
    history.push("/?next=home");
  }

  useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    scrollToSection("main");
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
        <div className="main" id="career-development">
          <Wings />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
