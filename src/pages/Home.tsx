import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import HomeBanner from "../components/Home/HomeBanner";

const Home: React.FC = () => {
  return (
    <Container fluid className="d-flex justify-content-">
      {/* Home Banner */}
      <Row>
        <Col>
          <HomeBanner />
        </Col>
      </Row>
      {/* Skills */}
      <Row></Row>
      {/* About */}
      <Row></Row>
      {/* Projects */}
      <Row></Row>
      {/* Contact */}
      <Row></Row>
    </Container>
  );
};

export default Home;
