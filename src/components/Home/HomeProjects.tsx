import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProjectData from "../../data/projectData.json";

const HomeProjects: React.FC = () => {
  const recentProjects = ProjectData.projects.slice(-4);

  return (
    <Container>
      <Row className="text-center mb-2">
        <h2>Recent Projects</h2>
      </Row>
      <Row>
        {recentProjects.map((project) => {
          return (
            <Col
              xl={3}
              lg={4}
              md={6}
              sm={6}
              xs={12}
              key={project.id}
              className="d-flex flex-column justify-content-center"
            >
              <Card className="mb-3 bg-body-secondary">
                <Card.Img variant="top" src={project.thumbnail} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project["short-description"]}</Card.Text>
                  <Button variant="primary">See More</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default HomeProjects;
