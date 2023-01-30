import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Movies App Concept"
              description="Simple design and usability. Movies app presents mine version of the IMBd, where you can see movies. You can see movie description and rating."
              ghLink="https://github.com/MelicAjlan/Movies-App-Concept"
              demoLink="https://portfolioaaa.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Wheater App Concept"
              description="Officialy my first fully functioning project. Wheater app is designed to return wheater data of any city in the world in real time. Don't belive me? Try it!"
              ghLink="https://github.com/MelicAjlan/Weather-App-Concept"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="UI/UX Nike Landing Page"
              description="Modern UI Design of the Nike Online Store."
              ghLink="https://github.com/MelicAjlan/UI-UX-Nike-landing-page/blob/main/Web-1920.png"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
