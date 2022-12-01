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
import { scrollToSection, getID } from "pkg/heplers";
import { GraphQLTaggedNode } from "relay-runtime";
import { usePreloadedQuery } from "react-relay";
import {
  IntRelWingQuery,
  IntRelWingQueryResponse,
} from "../__generated__/IntRelWingQuery.graphql";
interface props {
  queryRef: any;
  query: GraphQLTaggedNode;
}

type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

const Cwing: React.FC<props> = ({ queryRef, query }) => {
  const [session] = useRecoilState(recoilSessionState);
  const history = useHistory();

  if (!session) {
    const id = getID(window.location.href);
    id === undefined
      ? history.push("/?next=intlrelwing")
      : history.push(`/?next=intlrelwing#${id}`);
  }

  const [result, setResult] = useState<
    IntRelWingQueryResponse["getResourcesByWing"]
  >([]);
  const data = usePreloadedQuery<IntRelWingQuery>(
    query,
    queryRef
  ).getResourcesByWing;

  useEffect(() => {
    let copy: DeepWriteable<IntRelWingQueryResponse["getResourcesByWing"]> =
      JSON.parse(JSON.stringify(data));
    copy.sort((a, b) => a.order - b.order);
    setResult(copy);
  }, [data]);

  useEffect(() => {
    document.title = "International Realtions Wing | Resources | AnC";
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

  useEffect(() => {
    scrollToSection(getID(window.location.href));
  });

  return (
    <>
      <WingNavbar wingname="INTERNATIONAL RELATIONS WING" />
      <div className="wrapper">
        <WingHeader wing="INTERNATIONAL RELATIONS WING" />
        <div className="section">
          <Container>
            <div className="button-container"></div>
            <h3 className="title">About </h3>
            <h5 className="description">
              The International Relations Wing of the Academics and Career
              Council brings you a bunch of resources to help you on your
              journey to grab an international opportunity. Whether it is
              apping, deciding on MS vs PhD or confusion regarding which
              graduate school to choose, we have got you covered.
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
