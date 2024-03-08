import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import TextTyping from "../Common/TextTyping";
import PFP from "../../assets/PFP.png";

const About: React.FC = () => {
  return (
    <Row>
      <Col md={1} />
      <Col md={3}>
        <Image src={PFP} fluid />
      </Col>
      <Col md={1} />
      <Col md={6}>
        <Container>
          <TextTyping
            textToType="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, nisl vel ultrices tincidunt, velit nunc tincidunt urna, id
          lacinia nunc nisl id nunc. Sed auctor, nunc id tincidunt tincidunt,
          mauris nunc lacinia nunc, nec ultrices nunc nunc nec nunc. Sed auctor,
          nunc id tincidunt tincidunt, mauris nunc lacinia nunc, nec ultrices
          nunc nunc nec nunc."
            typespeed={4}
          />
        </Container>
      </Col>
      <Col md={1} />
    </Row>
  );
};

export default About;
