import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../assets/styles/Contact.css";
import LinkedInSVG from "/assets/contact/linkedin.svg";
import EmailImage from "/assets/contact/Email.png";

const Contact: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col md={7} className="mt-3">
          <h1>Contact Me!</h1>
          <p>
            If you have any questions or want to work together, feel free to
            reach out to me.
          </p>
          <hr />
          <p>
            <Image src={EmailImage} className="inline-image me-2" />
            <a href="#">Eliphaletread@outlook.com</a>
          </p>
          <p>
            <Image src={LinkedInSVG} className="inline-image me-2" />
            <a href="www.linkedin.com/in/eliphalet">Eli Read</a>
          </p>
        </Col>
        <Col md={5} xs={0} />
      </Row>
    </Container>
  );
};

export default Contact;
