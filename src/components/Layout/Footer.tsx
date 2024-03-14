import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid className="bg-body-secondary mt-auto text-end p-1 pe-2">
      <footer>
        <Link to={`/contact`}>Contact me!</Link>
      </footer>
    </Container>
  );
};

export default Footer;
