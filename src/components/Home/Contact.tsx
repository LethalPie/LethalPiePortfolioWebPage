import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import linkedin from "../../assets/linkedin.svg";

const Contact: React.FC = () => {
  return (
    <Container className="text-center">
      <h2>Contact Me!</h2>
      <p>
        If you have any questions or want to work together, feel free to reach
        out to me.
      </p>
      {/* <Row>
        <Col>
          <Figure />
          <Figure.Image src={linkedin} />
        </Col>
        <Col>
          <Figure />
        </Col>
      </Row> */}
    </Container>
  );
};

export default Contact;
