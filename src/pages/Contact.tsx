import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LinkedInSVG from "/assets/contact/linkedin.svg";
import EmailImage from "/assets/contact/Email.png";
import GithubSVG from "/assets/common/github.svg";

const Contact: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col md={7} className="mt-3">
          <h1>Contact Me!</h1>
          <p>
            If you have any questions, want to work together, or want a copy of
            my resume; feel free to reach out to me.
          </p>
          <hr />
          <p>
            <Image src={EmailImage} className="inline-image me-2" />
            <a href="mailto:Eliphaletread@outlook.com">
              Eliphaletread@outlook.com
            </a>
          </p>
          <p>
            <Image src={LinkedInSVG} className="inline-image me-2" />
            <a
              href={`https://www.linkedin.com/in/eliphalet`}
              target="_blank"
              rel="noreferrer"
            >
              Eli Read
            </a>
          </p>
          <p>
            <Image src={GithubSVG} className="inline-image me-2" />
            <a
              href={`https://github.com/LethalPie`}
              target="_blank"
              rel="noreferrer"
            >
              Lethalpie
            </a>
          </p>
        </Col>
        <Col md={5} xs={0} />
      </Row>
    </Container>
  );
};

export default Contact;
