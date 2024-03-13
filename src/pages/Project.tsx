import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import ProjectData from "../data/projectData.json";

interface RouteParams {
  [key: string]: string | undefined;
}

const Project: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const project = ProjectData.projects.find((p) => p.id === id);

  return project ? (
    <Container>
      <Row>
        <Col>
          <h2>{project.title}</h2>
        </Col>
        <Col>
          <Link to="/projects">Back</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={project.thumbnail} alt={project.title} />
        </Col>
        <Col>
          <p>{project["long-description"]}</p>
        </Col>
      </Row>
    </Container>
  ) : (
    <div>No project found</div>
  );
};

export default Project;
