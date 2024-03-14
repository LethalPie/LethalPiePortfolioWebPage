import React from "react";
import { Container, Row } from "react-bootstrap";
import "../assets/styles/Home.css";
import HomeBanner from "../components/Home/HomeBanner";
import HomeProjects from "../components/Home/HomeProjects";
import About from "../components/Home/About";

const Home: React.FC = () => {
  return (
    <Container id="top" fluid className="d-flex flex-column">
      <Row className="head-section">
        <HomeBanner />
      </Row>
      <Row id="about" className="about-section justify-content-center">
        <About />
      </Row>
      <Row className="project-section">
        <HomeProjects />
      </Row>
    </Container>
  );
};

export default Home;
