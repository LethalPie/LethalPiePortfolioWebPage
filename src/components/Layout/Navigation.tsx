import React from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navigation: React.FC = () => {
  return (
    <Navbar expand="md" className="bg-body-secondary" fixed="top">
      <Container>
        <Navbar.Brand
          as={NavHashLink}
          smooth
          to={`/home#top`}
          className="fw-bold"
        >
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
              <Nav.Link as={NavHashLink} smooth active to={`/home#top`}>
                Home
              </Nav.Link>
              <Nav.Link as={NavHashLink} smooth active to={`/home#about`}>
                About
              </Nav.Link>
              <Nav.Link as={Link} active to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link
                as={NavHashLink}
                smooth
                active
                to={`/contact`}
                scroll={(el: HTMLElement) =>
                  el.scrollIntoView({ behavior: "auto", block: "end" })
                }
              >
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
