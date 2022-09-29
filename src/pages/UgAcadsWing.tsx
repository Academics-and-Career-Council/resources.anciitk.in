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
  UgAcadsWingQuery,
  UgAcadsWingQueryResponse,
} from "../__generated__/UgAcadsWingQuery.graphql";
interface props {
  queryRef: any;
  query: GraphQLTaggedNode;
}

type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

const Cwing: React.FC<props> = ({ queryRef, query }) => {
  const [session] = useRecoilState(recoilSessionState);
  const history = useHistory();

  if (!session) {
    history.push("/?next=intlrelwing");
  }

  const [result, setResult] = useState<
    UgAcadsWingQueryResponse["getResourcesByWing"]
  >([]);
  const data = usePreloadedQuery<UgAcadsWingQuery>(
    query,
    queryRef
  ).getResourcesByWing;
  useEffect(() => {
    let copy: DeepWriteable<UgAcadsWingQueryResponse["getResourcesByWing"]> =
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
  return (
    <>
      <WingNavbar wingname="UG ACADEMICS WING" />
      <div className="wrapper">
        <WingHeader wing="UG ACADEMICS WING" />
        <div className="section">
          <Container>
            <div className="button-container"></div>
            <h3 className="title">About </h3>
            <h5 className="description">
              The UG/PG Academics wing takes up the responsibility of the
              academics related work of the Academic and Career Council. It acts
              as an interface between the institute policy makers and the
              students on matters related to academia. The wing endeavors to
              protect the students’ academic interests and is the voice of the
              student body on this front.
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
