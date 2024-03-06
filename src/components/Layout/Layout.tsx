import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Container fluid className="content">
        <Row>
          <Col sm={0}></Col>
          <Col sm={12} md={11}>
            <Outlet />
          </Col>
          <Col sm={0}></Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
