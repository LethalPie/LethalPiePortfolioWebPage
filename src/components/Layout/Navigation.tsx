import React, { useState } from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navigation: React.FC = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleHide = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -75; // navbar buffer
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Navbar expand="md" className="bg-body-secondary" fixed="top">
      <Container>
        <Navbar.Brand
          as={NavHashLink}
          to={`/home#top`}
          scroll={(el: HTMLElement) => scrollWithOffset(el)}
          className="fw-bold"
        >
          LETHAL PIE
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-sm`}
          onClick={handleShow}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
          className="custom-offcanvas-navbar"
          show={showOffcanvas}
          onHide={handleHide}
        >
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 text-end">
              <Nav.Link
                as={NavHashLink}
                active
                to={`/home#top`}
                scroll={(el: HTMLElement) => scrollWithOffset(el)}
                onClick={handleHide}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavHashLink}
                active
                scroll={(el: HTMLElement) => scrollWithOffset(el)}
                to={`/home#about`}
                onClick={handleHide}
              >
                About
              </Nav.Link>
              <Nav.Link as={Link} active to="/projects" onClick={handleHide}>
                Projects
              </Nav.Link>
              <Nav.Link as={Link} active to={`/contact`} onClick={handleHide}>
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
