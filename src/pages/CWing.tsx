import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { recoilSessionState } from "../pkg/recoilDeclarations";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import WingNavbar from "../components/WingNavbar";
import WingHeader from "../components/WingHeader";
import Footer from "../components/Footer";
//Resources
import DocBlock from "../components/DocBlock";
import VidBlock from "../components/VidBlock";
import { GraphQLTaggedNode } from "relay-runtime";
import { usePreloadedQuery } from "react-relay";
import {
  CWingQuery,
  CWingQueryResponse,
} from "__generated__/CWingQuery.graphql";
interface props {
  queryRef: any;
  query: GraphQLTaggedNode;
}

type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

const Cwing: React.FC<props> = ({ queryRef, query }) => {
  const [session] = useRecoilState(recoilSessionState);
  const history = useHistory();

  if (!session) {
    history.push("/?next=cwing");
  }

  const [result, setResult] = useState<
    CWingQueryResponse["getResourcesByWing"]
  >([]);
  const data = usePreloadedQuery<CWingQuery>(
    query,
    queryRef
  ).getResourcesByWing;
  useEffect(() => {
    let copy: DeepWriteable<CWingQueryResponse["getResourcesByWing"]> =
      JSON.parse(JSON.stringify(data));
    copy.sort((a, b) => a.order - b.order);
    setResult(copy);
  }, [data]);
  const [iconPills, setIconPills] = React.useState("0");
  React.useEffect(() => {
    document.title = "Career Development Wing | Resources | AnC";
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <WingNavbar wingname="CAREER DEVELOPMENT WING" />
      <div className="wrapper">
        <WingHeader />
        <div className="section">
          <Container>
            <div className="button-container"></div>
            <h3 className="title">About </h3>
            <h5 className="description">
              The Career Development Wing of the Academics and Career Council
              brings you a guide for resources useful for internship
              preparation. Browse through each section to find resources
              pertaining to your interest.
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6"></Col>
            </Row>
          </Container>
          <div className="section section-tabs">
            {result.map((resource) => {
              if (resource?.category.toString() === "DOCUMENT") {
                return (
                  <DocBlock
                    key={resource.id}
                    id={resource.id}
                    order={resource.order}
                    wing={resource.wing}
                    title={resource.title}
                    objects={resource.objects}
                  />
                );
              } else {
                return (
                  <VidBlock
                    key={resource.id}
                    id={resource.id}
                    wing={resource.wing}
                    order={resource.order}
                    title={resource.title}
                    objects={resource.objects}
                    setIconPills={setIconPills}
                    iconPills={iconPills}
                  />
                );
              }
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cwing;
