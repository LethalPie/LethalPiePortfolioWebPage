import React, { useState } from "react";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import styles from "../assets/styles/Project.module.css";
import ProjectData from "../data/projectData.json";

interface RouteParams {
  [key: string]: string | undefined;
}

const Project: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const project = ProjectData.projects.find((p) => p.id === id);

  const [modalShow, setModalShow] = useState<{ [key: number]: boolean }>({});

  const handleClose = (id: number) =>
    setModalShow((prevState) => ({ ...prevState, [id]: false }));
  const handleShow = (id: number) =>
    setModalShow((prevState) => ({ ...prevState, [id]: true }));

  return project ? (
    <Container className="px-4">
      <Row className="d-flex justify-content-between">
        <Col xs="auto">
          <h2 className="ps-2">{project.title}</h2>
        </Col>
        <Col xs="auto" className="d-flex flex-column justify-content-center">
          <Link to="/projects" className="ps-2">
            Back
          </Link>
        </Col>
        <hr className="mt-1" />
      </Row>
      <Row>
        <Col>
          <Container></Container>
          {project.images.map((image, index) => {
            return (
              <>
                <div
                  className={`${styles.imageContainer} float-start p-0 ms-md-2 mb-2 me-md-4`}
                >
                  <Image
                    src={image}
                    alt={project.title}
                    className={`${styles.projectImage} shadow`}
                    fluid
                    rounded
                  />
                  <div
                    className={`${styles.overlay} rounded`}
                    onClick={() => handleShow(index)}
                  >
                    <div className={styles.text}>Click to expand</div>
                  </div>
                </div>
                <Modal
                  show={modalShow[index]}
                  onHide={() => handleClose(index)}
                  className="custom-modal"
                >
                  <div className="custom-modal-content">
                    <Modal.Header closeButton>
                      <Modal.Title>{project.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex justify-content-center">
                      <Image src={image} fluid rounded />
                    </Modal.Body>
                  </div>
                </Modal>
              </>
            );
          })}

          <p>
            {project["long-description"].split("\n").map((line: string) => {
              return (
                <>
                  {line}
                  <br />
                </>
              );
            })}
          </p>
        </Col>
      </Row>
    </Container>
  ) : (
    <div>No project found</div>
  );
};

export default Project;
