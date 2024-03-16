import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import styles from "../assets/styles/Project.module.css";
import ProjectData from "../data/projectData.json";

interface RouteParams {
  [key: string]: string | undefined;
}

const Project: React.FC = () => {
  const [modalShow, setModalShow] = useState<{ [key: number]: boolean }>({});
  const { id } = useParams<RouteParams>();
  const topRef = useRef<HTMLDivElement>(null);

  const project = ProjectData.projects.find((p) => p.id === id);

  const handleClose = (id: number) =>
    setModalShow((prevState) => ({ ...prevState, [id]: false }));
  const handleShow = (id: number) =>
    setModalShow((prevState) => ({ ...prevState, [id]: true }));

  useEffect(() => {
    scroll.scrollToTop({
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, []);

  return project ? (
    <Container
      ref={topRef}
      className={`${styles.projectContainer} d-flex flex-column justify-content-between px-4`}
    >
      <Row>
        <Row className="d-flex justify-content-between">
          <Col xs={"auto"} className="d-md-flex">
            <Col xs={12} md="auto">
              <h2 className="ps-2">{project.title}</h2>
            </Col>
            <Col xs={12} md="auto">
              {project["lang-icons"].map((icon, index) => {
                return (
                  <Image
                    src={icon}
                    alt={`Language icon ${index}`}
                    key={index}
                    className="inline-image mx-2"
                  />
                );
              })}
            </Col>
          </Col>
          <Col
            xs={12}
            md="auto"
            className="d-flex flex-column justify-content-center"
          >
            <Link to="/projects" className="ps-2">
              All Projects
            </Link>
          </Col>
          <hr className="mt-1" />
        </Row>
        <Row>
          <Col>
            <div className="float-start">
              {project.images.map((image, index) => {
                return (
                  <>
                    <div
                      className={`${styles.imageContainer} p-0 ms-md-2 mb-3 me-md-4`}
                      key={index}
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
            </div>
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
      </Row>
      <Row className="d-flex justify-content-end mb-2">
        <Col xs="auto">
          {project["github"] && (
            <>
              <a href={project["github"]} target="_blank" rel="noreferrer">
                <Image
                  src="/assets/common/github.svg"
                  alt="Github"
                  className="inline-image me-2"
                />
              </a>
              <a href={project["github"]} target="_blank" rel="noreferrer">
                Check it out on Github!
              </a>
            </>
          )}
        </Col>
      </Row>
    </Container>
  ) : (
    <div>
      No project found
      <Link to="/projects" className="ps-2">
        Back to Projects
      </Link>
    </div>
  );
};

export default Project;
