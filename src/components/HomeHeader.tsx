import React from "react";
import { useRef } from "react";
// reactstrap components
import { Container } from "reactstrap";
// core components
import imgLogo from "../assets/img/anclogo.png";
import imgHeader from "../assets/img/header.jpg";

const HomeHeader = () => {
  const pageHeader = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const updateScroll = () => {
      let windowScrollTop = window.pageYOffset / 3;
      if (pageHeader && pageHeader.current) {
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      }
    };
    if (window.innerWidth > 991) {
      // pageHeader.current?.style.transform
      window.addEventListener("scroll", updateScroll);
    }
    return function cleanup() {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + imgHeader + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img alt="..." className="n-logo" src={String(imgLogo)}></img>
            <b>
              <h1 className="title">Academics and Career Council</h1>
            </b>
            <h3>Resources</h3>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomeHeader;
