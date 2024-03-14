import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProjectData from "../data/projectData.json";
import ProjectCard from "../components/Common/ProjectCard";

const Projects: React.FC = () => {
  return (
    <Container>
      <Row>
        {ProjectData.projects.map((project) => (
          <Col key={project.id} sm={6} md={4} lg={3}>
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project["short-description"]}
              imageUrl={project.thumbnail}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
