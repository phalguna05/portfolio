import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { HeadingContainer } from "../about/styles";
import { Heading } from "../experience/styles";
import { PageContainer } from "../globalStyles";
import { projects } from "./constants";
import {
  Content,
  ImageContainer,
  ImgBox,
  ProjectBox,
  ProjectsContainer,
  ProjectTitle,
  ScrollableContainer,
  TextContainer,
} from "./styles";

const Projects = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <PageContainer>
      <ProjectsContainer>
        <HeadingContainer>
          <Heading>Projects</Heading>
        </HeadingContainer>
        <ScrollableContainer>
          {projects.map((project, idx) => (
            <ProjectBox
              style={{
                alignSelf: matches
                  ? idx % 2
                    ? "flex-end"
                    : "flex-start"
                  : "center",
                borderRadius:
                  idx % 2
                    ? matches
                      ? "10px 40px"
                      : "10px"
                    : matches
                    ? "40px 10px"
                    : "10px",
              }}
            >
              <ImageContainer>
                <ImgBox
                  src={project.src}
                  style={{
                    borderRadius: idx % 2 ? "10px 40px" : "40px 10px",
                  }}
                />
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
