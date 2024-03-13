import React from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <Navbar expand="md" className="bg-body-secondary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          LETHAL PIE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link href="#action1">About</Nav.Link>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link href="#action3">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
