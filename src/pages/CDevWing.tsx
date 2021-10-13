import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";


// core components
import WingNavbar from "../components/WingNavbar";
import WingHeader from "../components/WingHeader";
import Footer from "../components/Footer";
//Resources
import CDevInternPrep from "../resources/CDevInternPrep";
import CDevInternGyan from "../resources/CDevInternGyan";
import Spo from "../resources/Spo";


function CDevWing() {
  // const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.title = "Career Development Wing | Resources | AnC";
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <WingNavbar wingname="CAREER DEVELOPMENT WING" />
      <div className="wrapper">
        <WingHeader />
        <div className="section">
          <Container>
            <div className="button-container">
            </div>
            <h3 className="title">About </h3>
            <h5 className="description">
              The Career Development Wing of the Academics and Career Council
              brings you a guide for resources useful for internship
              preparation. Browse through each section to find resources
              pertaining to your interest.
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
              </Col>
            </Row>
          </Container>
          <div className="section section-tabs">
            <Container>
              <CDevInternPrep />
              <Spo />
              <CDevInternGyan />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default CDevWing;
