import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import useElementOnScreen from "../../hooks/useElementOnScreen";
import TextTyping from "../Common/TextTyping";
import PFP from "../../assets/PFP.png";

const About: React.FC = () => {
  const { containerRef, isIntersecting } = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  return (
    <Container ref={containerRef}>
      {isIntersecting && (
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
                typespeed={1}
              />
            </Container>
          </Col>
          <Col md={1} />
        </Row>
      )}
    </Container>
  );
};

export default About;
