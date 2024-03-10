import React, { useEffect, useState } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import useElementOnScreen from "../../hooks/useElementOnScreen";
import AboutMeText from "../../data/AboutMe.txt";
import PFP from "../../assets/PFP.png";

const About: React.FC = () => {
  const [text, setText] = useState("");

  const { containerRef, isIntersecting } = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  useEffect(() => {
    fetch(AboutMeText)
      .then((r) => r.text())
      .then((data) => {
        setText(data);
      });
  }, []);

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
            {text.split("\n").map((line) => (
              <p>{line}</p>
            ))}
          </Col>
          <Col md={1} />
        </Row>
      )}
    </Container>
  );
};

export default About;
