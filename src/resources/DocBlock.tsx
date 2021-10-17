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

import { createFragmentContainer, graphql } from "react-relay";

type subItem = {
  id: string;
  name: string;
  category: string;
  link: string;
};

interface props {
  id: string;
  wing: string;
  title: string;
  category?: string;
  items: Readonly<Array<subItem>>
}

const DocBlock: React.FC<props> = ({ id, wing, title, items }) => {
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
                      {items.map((resource) => {
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