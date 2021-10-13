import React from "react";
import {useRef} from "react";

// reactstrap components
import { Container } from "reactstrap";

// import images
import imgLogo from "../assets/img/anclogo.png";
import imgHeader from "../assets/img/bg5.jpg";


// core components

const WingHeader = () => { // removed props here as it was not used
  let pageHeader = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        if (pageHeader && pageHeader.current) {
          pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
        }
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <React.Fragment>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + imgHeader + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={imgLogo}></img>
          </div>
          <h3 className="title">CAREER DEVELOPMENT WING</h3>
          <p className="category">RESOURCES</p>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default WingHeader;
