import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProjectData from "../data/projectData.json";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  return (
    <Container>
      <Row>
        {ProjectData.projects.map((project) => (
          <Col key={project.id} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={project.thumbnail} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project["short-description"]}</Card.Text>
                <Button>
                  <Link to={`/project/${project.id}`}>Learn More</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
