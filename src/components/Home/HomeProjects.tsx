import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import useElementOnScreen from "../../hooks/useElementOnScreen";
import TextTyping from "../Common/TextTyping";

const HomeProjects: React.FC = () => {
  const { containerRef, isIntersecting } = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  const projectArray = ["Project 1", "Project 2", "Project 3", "Project 4"];

  return (
    <Container ref={containerRef}>
      {isIntersecting && (
        <>
          {" "}
          <Row className="text-center mb-2">
            <h2>Recent Projects</h2>
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
                      <Card.Title>
                        <TextTyping textToType={project} typeSpeed={3} />
                      </Card.Title>
                      <Card.Text>
                        <TextTyping
                          textToType="This is a card with supporting text below as a natural lead-in to additional content."
                          typeSpeed={3}
                        />
                      </Card.Text>
                      <Button variant="primary">See More</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </Container>
  );
};

export default HomeProjects;
