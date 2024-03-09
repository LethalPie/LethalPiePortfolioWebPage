import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/Home.css";
import HomeBanner from "../components/Home/HomeBanner";
import Navigation from "../components/Layout/Navigation";
import Footer from "../components/Layout/Footer";
import Skills from "../components/Home/Skills";
import HomeProjects from "../components/Home/HomeProjects";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";

const Home: React.FC = () => {
  return (
    <Container fluid className="d-flex flex-column">
      {/* Home Banner */}
      <Row className="head-section mb-1">
        <Col className="d-flex flex-column justify-content-between p-0">
          <Navigation />
          <HomeBanner />
          <div />
        </Col>
      </Row>

      {/* About */}
      <Row className="about-section d-flex flex-column justify-content-start">
        <About />
      </Row>

      {/* Project */}
      <Row className="project-section">
        <Col>
          <HomeProjects />
        </Col>
      </Row>
      {/* Skills */}
      <Row className="skill-section">
        <Col>
          <Skills />
        </Col>
      </Row>

      {/* Contact */}
      <Row className="contact-section">
        <Col className="d-flex flex-column justify-content-between">
          <Contact />
          <Footer></Footer>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
