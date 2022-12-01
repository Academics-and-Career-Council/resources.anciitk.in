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
import { LinkOutlined } from "@ant-design/icons";
import { copyToClipboard } from "pkg/heplers";
interface props {
  id: string;
  wing: string;
  order: number;
  title: string;
  category?: string;
  readonly objects: Readonly<Array<subItem>>;
}


const handleBlock = (name: string) => {
  const baseUrl = window.location.href.split("#")[0];
  copyToClipboard(`${baseUrl}#${name}`);
  // message.success(`Link to ${name} Copied`);
  // message.config({
  //   top: 400,
  //   duration: 2,
  //   maxCount: 3,
  //   prefixCls: `Link to ${name} Copied`,
  // });
};

const VidBlock: React.FC<props> = ({ title, objects }) => {
  const [iconPills, setIconPills] = useState("0");
  return (
    <Container>
      <Row>
        <p className="category" id={title.replaceAll(" ", "")}>
          {title} &nbsp;
          <LinkOutlined
            onClick={() => handleBlock(title.replaceAll(" ", ""))}
          />
        </p>
        <Card>
          <CardHeader>
            <Nav className="justify-content-center" role="tablist" tabs>
              {objects.map((resource, index) => {
                return (
                  <NavItem key={resource.id}>
                    <NavLink
                      // key={resource.id}
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
