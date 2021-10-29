import { useState } from "react";
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
  Row,
  Container,
} from "reactstrap";

import { subItem } from "../Types/types";

interface props {
  id: string;
  wing: string;
  order: number;
  title: string;
  category?: string;
  readonly objects: Readonly<Array<subItem>>;
}

const VidBlock: React.FC<props> = ({
  title,
  objects,
}) => {
  const [iconPills, setIconPills] = useState("0");
  return (
    <Container>
      <Row>
        <p className="category">{title}</p>
        <Card>
          <CardHeader>
            <Nav className="justify-content-center" role="tablist" tabs>
              {objects.map((resource, index) => {
                return (
                  <NavItem>
                    <NavLink
                      key={resource.id}
                      className={iconPills === index.toString() ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setIconPills(index.toString());
                      }}
                    >
                      {resource.name}
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </CardHeader>
          <CardBody>
            <TabContent
              className="text-center"
              activeTab={"iconPills" + iconPills}
            >
              {objects.map((resource, index) => {
                return (
                  <TabPane
                    tabId={"iconPills" + index.toString()}
                    key={resource.id}
                  >
                    <iframe
                      title={resource.name}
                      width="100%"
                      height="538"
                      src={resource.link}
                      frameBorder="0" // was originally frameborder
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </TabPane>
                );
              })}
            </TabContent>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
};

export default VidBlock;
