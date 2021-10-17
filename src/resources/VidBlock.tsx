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

type SubResourceType =  {
  gdrive:string,
  pdf:string,
  youtube:string,
  zoom:string
}

interface subItem {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly link: string;
}

interface props {
  id: string;
  wing: string;
  title: string;
  category?: string;
  // items: Array<subItem>;
  readonly items : Readonly<Array<subItem>>

  iconPills: string;
  setIconPills: React.Dispatch<React.SetStateAction<string>>;
  pills: string;
  setPills: React.Dispatch<React.SetStateAction<string>>;
}

const VidBlock: React.FC<props> = ({
  id,
  wing,
  title,
  items,
  iconPills,
  setIconPills,
  pills,
  setPills,
}) => {
  return (
    <Container>
      <Row>
        <p className="category">{title}</p>
        <Card>
          <CardHeader>
            <Nav className="justify-content-center" role="tablist" tabs>
              {items.map((resource, index) => {
                return (
                  <NavItem>
                    <NavLink
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
              {items.map((resource, index) => {
                return (
                  <TabPane tabId={"iconPills" + index.toString()}>
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
