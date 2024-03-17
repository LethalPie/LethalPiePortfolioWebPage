import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/styles/ProjectCard.css";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  date,
}) => {
  return (
    <Card className="mb-3 bg-body-secondary shadow">
      <Card.Img
        variant="top"
        src={imageUrl}
        className="project-card-thumbnail"
      />
      <Card.Body className="project-card-body d-flex flex-column justify-content-between">
        <Container>
          <Card.Title>{title}</Card.Title>
          <hr className="project-card-mobile-hr my-2" />
          <Card.Text className="project-card-text">{description}</Card.Text>
        </Container>
        <Row className="d-flex justify-content-between">
          <Col>
            <Button
              as={Link as any}
              to={`/project/${id}`}
              className="project-card-button"
            >
              See More
            </Button>
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <Card.Text className="project-card-date text-end">{date}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
