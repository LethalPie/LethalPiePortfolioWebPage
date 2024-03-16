import React, { useEffect, useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import AboutMeText from "../../data/AboutMe.txt";
import PFP from "/assets/home/PFP.png";

const About: React.FC = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(AboutMeText)
      .then((r) => r.text())
      .then((data) => {
        setText(data);
      });
  }, []);

  return (
    <>
      <Row>
        <Col md={1} className="d-none d-md-block" />
        <Col md={3} className="d-flex flex-column justify-content-center">
          <Image src={PFP} fluid roundedCircle className="mb-4 shadow-lg" />
        </Col>
        <Col md={1} />
        <Col md={6} className="d-flex flex-column justify-content-center">
          <Container>
            {text.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </Container>
        </Col>
        <Col md={1} className="d-none d-md-block" />
      </Row>
      <hr className="d-sm-block d-md-none" />
    </>
  );
};

export default About;
