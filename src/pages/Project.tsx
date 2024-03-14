import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import ProjectData from "../data/projectData.json";

interface RouteParams {
  [key: string]: string | undefined;
}

const Project: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const project = ProjectData.projects.find((p) => p.id === id);

  return project ? (
    <Container className="px-4">
      <Row className="d-flex justify-content-between">
        <Col xs="auto">
          <h2>{project.title}</h2>
        </Col>
        <Col xs="auto" className="d-flex flex-column justify-content-center">
          <Link to="/projects">Back</Link>
        </Col>
      </Row>

      <hr />
      <Image
        src={project.thumbnail}
        alt={project.title}
        className="float-start me-3 mb-3"
      />
      <p>{project["long-description"]}</p>
    </Container>
  ) : (
    <div>No project found</div>
  );
};

export default Project;
