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

// import types
import {item} from "../Types/types"


const DocBlock: React.FC<item> = ({ id, wing, title, objects }) => {
  return (
    <>
      <Container>
        <Row>
          <p className="category">{title}</p>
          <Card>
            <CardBody>
              <TabContent className="text-left" activeTab={"iconPills"}>
                <TabPane tabId="iconPills">
                  <p className="h5" color="dark">
                    {" "}
                    {/* was class originally*/}
                    <ul>
                      {objects.map((resource) => {
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

export default DocBlock;