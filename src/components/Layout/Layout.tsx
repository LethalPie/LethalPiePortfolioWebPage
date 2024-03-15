import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../../assets/styles/Layout.css";

const Layout = () => {
  return (
    <Container fluid className="app p-0 d-flex">
      <Navigation />
      <Container id="nav-buffer" />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
