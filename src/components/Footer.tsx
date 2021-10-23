// import React from "react";

// reactstrap components
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav></nav>
        <div className="copyright" id="copyright">
          &copy; {new Date().getFullYear()},
          <a href="https://anciitk.in/" target="_blank" rel="noreferrer">
            Academics And Career Council , IIT Kanpur
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
