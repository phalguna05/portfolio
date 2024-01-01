import React from "react";
import { Content, Heading, HeadingContainer } from "../about/styles";
import { PageContainer } from "../globalStyles";
import { projects } from "./constants";
import {
  ImageContainer,
  ImgBox,
  ProjectBox,
  ProjectsContainer,
  ProjectTitle,
  ScrollableContainer,
  TextContainer,
} from "./styles";

const Projects = () => {
  return (
    <PageContainer>
      <ProjectsContainer>
        <HeadingContainer>
          <Heading>Projects</Heading>
        </HeadingContainer>
        <ScrollableContainer>
          {projects.map((project) => (
            <ProjectBox>
              <ImageContainer>
                <ImgBox src={project.src} />
              </ImageContainer>
              <TextContainer>
                <ProjectTitle>{project.title}</ProjectTitle>
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
