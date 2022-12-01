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
import { item } from "../Types/types";
import { copyToClipboard } from "pkg/heplers";
import { LinkOutlined } from "@ant-design/icons";
// import { message } from "antd";

const handleItem = (id: string, name: string) => {
  console.log(id, name);
  const baseUrl = window.location.href.split("#")[0];
  copyToClipboard(`${baseUrl}#${id}`);
  // message.success(`Link to ${name} Copied`);
  // message.config({
  //   top: 400,
  //   duration: 2,
  //   maxCount: 3,
  //   prefixCls: `Link to ${name} Copied`,
  // });
  // console.log(name);
};

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

const DocBlock: React.FC<item> = ({ title, objects }) => {
  return (
    <>
      <Container>
        <Row>
          <p className="category" id={title.replaceAll(" ", "")}>
            {title} &nbsp;
            <LinkOutlined onClick={() => handleBlock(title.replaceAll(" ", ""))} />
          </p>
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
                          <li key={resource.id} id={resource.id}>
                            <a
                              href={resource.link}
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {resource.name}
                            </a>
                            &nbsp;
                            <LinkOutlined
                              onClick={() =>
                                handleItem(resource.id, resource.name)
                              }
                            />
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
