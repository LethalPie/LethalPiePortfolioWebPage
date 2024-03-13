import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/Home.css";
import HomeBanner from "../components/Home/HomeBanner";
import Skills from "../components/Home/Skills";
import HomeProjects from "../components/Home/HomeProjects";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";

const Home: React.FC = () => {
  return (
    <Container fluid className="d-flex flex-column">
      <Row className="head-section d-flex flex-column justify-content-center mb-1">
        <HomeBanner />
      </Row>
      <Row className="about-section d-flex flex-column justify-content-start">
        <About />
      </Row>
      <Row className="project-section">
        <HomeProjects />
      </Row>
      <Row className="skill-section">
        <Skills />
      </Row>
      <Row className="contact-section">
        <Col>
          <Contact />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
