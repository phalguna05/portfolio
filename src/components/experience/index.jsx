import React from "react";
import { Content } from "../about/styles";
import { PageContainer } from "../globalStyles";
import { experiences } from "./constants";
import {
  ExperienceBox,
  ExperienceContainer,
  Heading,
  LeftContainer,
  RightContainer,
  Tag,
} from "./styles";

const Experience = () => {
  return (
    <PageContainer>
      <ExperienceContainer>
        <LeftContainer>
          <Heading>Experience</Heading>
        </LeftContainer>
        <RightContainer>
          {/* <Heading style={{ marginBottom: "0px" }}>Experience</Heading> */}
          {experiences.map((experience) => (
            <ExperienceBox>
              <Content
                style={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "2vh",
                }}
              >
                {experience.title}
              </Content>
              <Content>{experience.company}</Content>
              <Content>
                {experience.from} - {experience.to}
              </Content>

              <Content sx={{ lineHeight: "4vh" }}>
                {experience.description}
              </Content>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  marginTop: "15px",
                  flexWrap: "wrap",
                }}
              >
                {experience.skills.map((skill) => (
                  <Tag>{skill}</Tag>
                ))}
              </div>
            </ExperienceBox>
          ))}
        </RightContainer>
      </ExperienceContainer>
    </PageContainer>
  );
};

export default Experience;
