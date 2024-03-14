import React, { useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import AboutMeText from "../../data/AboutMe.txt";
import PFP from "../../assets/PFP.png";

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
      <Row />
      <Row>
        <Col md={1} className="d-none d-md-block" />
        <Col md={3} className="justify-content-xs-center">
          <Image src={PFP} fluid className="mb-4" />
        </Col>
        <Col md={1} />
        <Col md={6}>
          {text.split("\n").map((line) => (
            <p>{line}</p>
          ))}
        </Col>
        <Col md={1} className="d-none d-md-block" />
      </Row>
      <hr className="d-sm-block d-md-none" />
    </>
  );
};

export default About;
