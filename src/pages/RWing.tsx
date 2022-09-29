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
  RWingQuery,
  RWingQueryResponse,
} from "../__generated__/RWingQuery.graphql";
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
    RWingQueryResponse["getResourcesByWing"]
  >([]);
  const data = usePreloadedQuery<RWingQuery>(
    query,
    queryRef
  ).getResourcesByWing;
  useEffect(() => {
    let copy: DeepWriteable<RWingQueryResponse["getResourcesByWing"]> =
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
      <WingNavbar wingname="RESEARCH WING" />
      <div className="wrapper">
        <WingHeader wing="RESEARCH WING" />
        <div className="section">
          <Container>
            <div className="button-container"></div>
            <h3 className="title">About </h3>
            <h5 className="description">
              The Research Wing of the council aims at cultivating and promoting
              research interests in the student community, by providing the
              freedom and opportunities to work upon diverse areas of research.
              To increase awareness about the variety of research going on in
              the campus, and promote research among the campus community.
              Specifically, Organizing Students’ Research Convention (SRC),
              Revival of PoWER (Promotion of Work Experience and Research),
              Developing an online research portal (database)
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
