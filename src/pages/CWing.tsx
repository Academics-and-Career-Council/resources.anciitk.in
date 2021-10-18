import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import WingNavbar from "../components/WingNavbar";
import WingHeader from "../components/WingHeader";
import Footer from "../components/Footer";
//Resources
import DocBlock from "resources/DocBlock";
import VidBlock from "resources/VidBlock";
import { GraphQLTaggedNode } from "relay-runtime";
import { usePreloadedQuery } from "react-relay";
import { CWingQuery} from "__generated__/CWingQuery.graphql";
import lodash from "lodash";
interface props {
  queryRef: any;
  query: GraphQLTaggedNode;
}

const Cwing: React.FC<props> = ({ queryRef, query }) => {
  const data = usePreloadedQuery<CWingQuery>(query, queryRef).getResourcesByWing;
  let mutData = lodash.cloneDeep(data)
  // @ts-ignore
  mutData.sort((a,b) => a.order - b.order)
  const [iconPills, setIconPills] = React.useState("0");
  const [pills, setPills] = React.useState("0");
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
            
            {mutData.map((resource) => {
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
                    pills={pills}
                    setPills={setPills}
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
