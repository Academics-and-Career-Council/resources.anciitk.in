import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
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
      "https://docs.google.com/presentation/d/1G0EpBLRU_Yu5Qc1N_hnuNoMKsSCd3jZU7ag0BN2qG9w/edit?usp=sharing",
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
            <CardBody>
              <TabContent className="text-left" activeTab={"iconPills"}>
                <TabPane tabId="iconPills">
                  <p className="h5" color="dark"> {/* was class originally*/}
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
