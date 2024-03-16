import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectData from "../data/projectData.json";
import ProjectCard from "../components/Common/ProjectCard";

const Projects: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Projects</h2>
        </Col>
        <hr />
      </Row>
      <Row>
        {[...ProjectData.projects].reverse().map((project) => {
          return (
            <Col key={project.id} sm={6} md={4} lg={3}>
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project["short-description"]}
                imageUrl={project.thumbnail}
                date={project.date}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Projects;
