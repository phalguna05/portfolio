import React from "react";
import { Content } from "../about/styles";
import { PageContainer } from "../globalStyles";
import { projects } from "./constants";
import {
  ImageContainer,
  ImgBox,
  ProjectBox,
  ProjectsContainer,
  ScrollableContainer,
  TextContainer,
} from "./styles";

const Projects = () => {
  return (
    <PageContainer>
      <ProjectsContainer>
        {/* <Heading style={{ marginTop: "8vh", marginBottom: "2vh" }}>
          Projects
        </Heading> */}
        <ScrollableContainer>
          {projects.map((project) => (
            <ProjectBox>
              <ImageContainer>
                <ImgBox src={project.src} />
              </ImageContainer>
              <TextContainer>
                <Content>{project.description}</Content>
              </TextContainer>
            </ProjectBox>
          ))}
        </ScrollableContainer>
      </ProjectsContainer>
    </PageContainer>
  );
};

export default Projects;
