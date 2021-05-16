import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
} from "reactstrap";

//ResourceData
const Data = [
  {
    name: "Coding Test Resources",
    link:
      "https://docs.google.com/presentation/d/1X1AVPuiAzdNVh7TGcJ9wf74sNVhe08xi59QYNidfTKE/edit?usp=sharing",
  },
  {
    name: "Finance Resources",
    link:
      "https://docs.google.com/presentation/d/17fYhRpNYE3vlSV_me3d8GzJbXsDeBt6CW1GbRgtPFSg/edit?usp=sharing",
  },
  {
    name: "Quant Resources",
    link:
      "https://www.dropbox.com/sh/zf0curmnh7ke9vz/AABXvvX3xGYdJqvTU_sH0fI3a?dl=0",
  },
  {
    name: "Product Management Resources",
    link:
      "https://docs.google.com/presentation/d/11UfPnYrsrlV-3faryKuyUIv9d3p8VU1A74Hqa9R45to/edit?usp=sharing",
  },
  {
    name: "Common HR Questions",
    link:
      "https://docs.google.com/document/d/1zMKWYonYPTEAatNfqiLqdg8-BLSYq9SQ6NPL5vtdkL8/edit?usp=sharing",
  },
];

// core components
const CDevInternPrep = () => {
  return (
    <>
      <Container>
        <Row>
          <p className="category">Internship Preparation</p>
          <Card>
            {/* <CardHeader>
                <Nav className="justify-content-center" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className="active"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <i className="now-ui-icons objects_umbrella-13"></i>
                      Internship Preparation
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader> */}
            <CardBody>
              <TabContent className="text-left" activeTab={"iconPills"}>
                <TabPane tabId="iconPills">
                  <p class="h5" color="dark">
                    <ul>
                      {Data.map((resource) => {
                        return (
                          <li>
                            <a
                              href={resource.link}
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {resource.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </p>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default CDevInternPrep;
