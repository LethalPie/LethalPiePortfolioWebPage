import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import TextTyping from "../Common/TextTyping";
import "../../assets/styles/HomeBanner.css";
import lethalPieLogo from "../../assets/LogoPlaceholder.png";

const HomeBanner: React.FC = () => {
  return (
    <Row>
      <Col md={1} className="d-none d-md-block" />
      <Col
        md={6}
        sm={6}
        className="d-flex flex-column justify-content-md-center justify-content-sm-start"
      >
        <h1 className="ms-4">
          <TextTyping
            textToType={`Heello,\nI'm LethalPie`}
            typeSpeed={70}
            bannerText={"EEliplalet"}
          />
        </h1>
      </Col>
      <Col
        md={5}
        className=" d-md-flex flex-column justify-content-center d-none d-md-block"
      >
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
