import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  imageUrl,
}) => {
  return (
    <Card className="mb-3 bg-body-secondary">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button as={Link as any} to={`/project/${id}`} variant="primary">
          See More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
