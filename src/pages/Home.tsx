import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import HomeBanner from "../components/Home/HomeBanner";
import Navigation from "../components/Layout/Navigation";
import Footer from "../components/Layout/Footer";
import Skills from "../components/Home/Skills";

const Home: React.FC = () => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Container fluid className="d-flex flex-column">
      {/* Home Banner */}
      <Row className="focus-section mb-1 p-0">
        <Col className="d-flex flex-column justify-content-between p-0">
          <Navigation />
          <HomeBanner />
          <div />
          <div />
        </Col>
      </Row>
      {/* Skills */}
      <Row className="focus-section mb-1 p-0">
        <Skills />
      </Row>
      {/* About */}
      <Row className="focus-section mb-1 p-0"></Row>
      {/* Projects */}
      <Row className="focus-section mb-1 p-0"></Row>
      {/* Contact */}
      <Row className="focus-section mb-1 p-0">
        <Col className="d-flex flex-column justify-content-end">
          <Footer></Footer>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
