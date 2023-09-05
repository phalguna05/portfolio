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
              <Content style={{ fontWeight: "bold", color: "#009F93" }}>
                {experience.title} . {experience.company}
              </Content>
              <Content style={{ color: "#03312E" }}>
                {experience.from} - {experience.to}
              </Content>

              <Content style={{ color: "black" }}>
                {experience.description}
              </Content>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  marginTop: "15px",
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
