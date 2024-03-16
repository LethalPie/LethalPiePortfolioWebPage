import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import GithubSVG from "/assets/common/github.svg";

const Footer = () => {
  return (
    <Row className="bg-body-secondary mt-auto mx-0 ">
      <footer className="d-flex justify-content-between p-1 pe-2">
        <Col className="d-flex flex-column justify-content-center m-1">
          <Container>
            <Link to={`https://github.com/LethalPie`}>
              <Image src={GithubSVG} alt="Github" className="inline-image" />
            </Link>
            <Link to={`/contact`} className="ms-2">
              Contact me!
            </Link>
          </Container>
        </Col>
        <Col className="d-flex flex-column justify-content-center m-1">
          <p className="copyright-footer text-end m-0">
            &copy; {new Date().getFullYear()} Eliphalet Read
          </p>
        </Col>
      </footer>
    </Row>
  );
};

export default Footer;
