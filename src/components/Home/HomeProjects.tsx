import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectData from "../../data/projectData.json";
import ProjectCard from "../Common/ProjectCard";

const HomeProjects: React.FC = () => {
  const recentProjects = ProjectData.projects.slice(-4);

  return (
    <Container>
      <Row className="text-center my-3">
        <h2>Recent Projects</h2>
      </Row>
      <Row>
        {recentProjects.map((project) => {
          return (
            <Col
              lg={3}
              sm={6}
              xs={12}
              key={project.id}
              className="d-flex flex-column justify-content-center"
            >
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project["short-description"]}
                imageUrl={project.thumbnail}
              />
            </Col>
          );
        })}
      </Row>
      <Row className="text-center mt-2 mb-4">
        <Link to="/projects">View All</Link>
      </Row>
    </Container>
  );
};

export default HomeProjects;
