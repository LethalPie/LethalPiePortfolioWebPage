import React from "react";
import { Row, Col } from "react-bootstrap";
import javascript from "../../assets/lang-logos/javascript.svg";
import typescript from "../../assets/lang-logos/typescript.svg";
import react from "../../assets/lang-logos/react.svg";
import nodejs from "../../assets/lang-logos/nodejs.svg";
import php from "../../assets/lang-logos/php.svg";
import cPlusPlus from "../../assets/lang-logos/cPlusPlus.svg";
import cSharp from "../../assets/lang-logos/cSharp.svg";
import c from "../../assets/lang-logos/c.svg";
import java from "../../assets/lang-logos/java.svg";
import kotlin from "../../assets/lang-logos/kotlin.svg";
import python from "../../assets/lang-logos/python.svg";
import andriodStudio from "../../assets/lang-logos/andriodStudio.svg";

const Skills: React.FC = () => {
  const skillArray = [
    javascript,
    typescript,
    react,
    nodejs,
    php,
    cPlusPlus,
    cSharp,
    c,
    java,
    kotlin,
    python,
    andriodStudio,
  ];

  return (
    <Col className="d-flex flex-column justify-content-center text-center">
      <Row className="mt-4">
        {skillArray.map((skill, index) => {
          return (
            <Col
              xl={1}
              lg={2}
              md={3}
              sm={4}
              xs={6}
              key={index}
              className="d-flex flex-column justify-content-center"
            >
              <img src={skill}></img>
            </Col>
          );
        })}
      </Row>
    </Col>
  );
};

export default Skills;
