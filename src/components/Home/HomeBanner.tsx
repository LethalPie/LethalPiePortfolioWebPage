import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import TextTyping from "../Common/TextTyping";
import "../../assets/styles/HomeBanner.css";
import lethalPieLogo from "../../assets/LogoPlaceholder.png";

const HomeBanner: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <Row>
      <Col md={1} />
      <Col md={6} className="d-flex flex-column justify-content-center">
        <h1 className="ms-4">
          <TextTyping textToType={`Hello,\nI'm Eliphalet`} typespeed={70} />
        </h1>
      </Col>
      <Col md={5}>
        <Image
          src={lethalPieLogo}
          alt="Lethal Pie Logo"
          className="logo-image"
        />
      </Col>
    </Row>
  );
};

export default HomeBanner;
