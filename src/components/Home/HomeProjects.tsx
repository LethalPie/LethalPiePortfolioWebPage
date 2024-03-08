import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const HomeProjects: React.FC = () => {
  const projectArray = ["Project 1", "Project 2", "Project 3", "Project 4"];

  return (
    <Container>
      <Row className="text-center">
        <h2>Projects</h2>
      </Row>
      <Row>
        {projectArray.map((project, index) => {
          return (
            <Col
              xl={3}
              lg={4}
              md={6}
              sm={6}
              xs={12}
              key={index}
              className="d-flex flex-column justify-content-center"
            >
              <Card className="mb-3 bg-body-secondary">
                <Card.Img variant="top" src="https://placehold.co/100x70" />
                <Card.Body>
                  <Card.Title>{project}</Card.Title>
                  <Card.Text>
                    This is a card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
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
