import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import agent from "../../Assets/Projects/ai-agent.png";
import blind from "../../Assets/Projects/blind.png";
import iitm from "../../Assets/Projects/iitm-gen-ai.png";
import innov from "../../Assets/Projects/innov.png";
import mediq from "../../Assets/Projects/mediq.png";
import thunder from "../../Assets/Projects/thunder.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mediq}
              isBlog={false}
              title="MED IQ"
              description="This project aims to automate the extraction of medical information from images and texts. It leverages various machine learning models and techniques, including Optical Character Recognition (OCR), Named Entity Recognition (NER), and pre-trained Large Language Models (LLMs). The dataset used for training and evaluation is sourced from web scraping medical information."
              ghLink="https://github.com/mdabucse/MED-IQ"
              demoLink="https://youtu.be/z2VE5saTJOs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={innov}
              isBlog={false}
              title="INNOVHUNT"
              description="The InnoHunt contract is a decentralized project funding and voting platform where users can create projects, buy and sell shares, create proposals for project funding, and vote on these proposals. Each project has an associated ERC20 token representing its shares."
              ghLink="https://github.com/mdabucse/Innohunt-Hackathon"
              demoLink="https://youtu.be/9h2zakLXZ70"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iitm}
              isBlog={false}
              title="IITM BS IYANDRA"
              description="This script facilitates document retrieval and querying using embeddings. It integrates PDF text extraction, sentence embedding generation, efficient indexing for retrieval, and interaction with an external API for further analysis."
              ghLink="https://github.com/mdabucse/IITM-GenAI-HACK"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agent}
              isBlog={false}
              title="MED AI AGENT"
              description="MedIQ is a conversational agent designed to provide detailed information about various medicines. By interacting with MED AI AGENT, users can obtain essential information regarding the usage, contraindications, dosage, side effects, storage, expiration, manufacturing details, overdose symptoms, and ingredients of specified medicines."
              ghLink="https://github.com/mdabucse/Medical-Agent-FETCH-AI-"
              demoLink="https://github.com/mdabucse/Medical-Agent-FETCH-AI-/issues/1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thunder}
              isBlog={false}
              title="THUNDER STORM PREDICTION"
              description="The importance and benefits of the innovative project to the society: Early prediction allows for proactive safety measures to be implemented, such as rerouting flights, rescheduling landings and takeoffs, and initiating ground operations adjustments. Enhances the efficiency of air traffic control by providing accurate forecasts, minimizing disruptions, and ensuring smoother coordination between airfield operators and aviation authorities. "
              ghLink="https://github.com/mdabucse/Thunderstorm-Prediction-Project"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thunder}
              isBlog={false}
              title="EXPLORE EASE"
              description="ExploreEase is an innovative application developed using Flutter for the front-end and Django REST framework for the back-end. This app aims to provide users with a seamless and intuitive experience, combining the robust features of Flutter's UI capabilities with the powerful, scalable backend services of Django. Whether you're exploring new destinations or managing your journey, ExploreEase ensures a smooth and efficient process, leveraging the best of modern mobile and web technologies."             
              ghLink="https://github.com/mdabucse/Travel-App"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blind}
              isBlog={false}
              title="Smart Blind Belt For Visually Challenged People Using IOT"
              description="The main purpose of this device is to help visually challenged people to a safe and convenient solution to overcome their obstacles. The project aims for flexibility, affordability, portability, simplicity in design, and practicality for the user. The proposed system uses the ultrasonic sensors which is used to identify the user’s problems, identify them by processing images, and set alarms via a Bluetooth-enabled audio output device. This approach allows users to discuss issues more easily and safely. The GPS for locating the person and sending the emergency SMS message for third person in any emergency situations."             
              ghLink="https://mdabu.hashnode.dev/smart-blind-belt-for-visually-challenged-people"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
