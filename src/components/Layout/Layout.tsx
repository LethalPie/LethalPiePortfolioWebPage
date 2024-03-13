import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <Container fluid className="app p-0">
      <Navigation />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
