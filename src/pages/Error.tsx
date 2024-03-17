import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ErrorImage from "/assets/common/Error.png";
import "../assets/styles/Error.css";

const ErrorPage: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={7} className="mt-3">
          <h1>404: Page Not Found</h1>
          <hr />
          <p>
            The page you are looking for does not exist. Please check the URL or
            click the link above to return to the home page.
          </p>
        </Col>
        <Col md={5} className="d-flex justify-content-center">
          <Image src={ErrorImage} className="spin" width={400} />
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
