import React from "react";
import { Content } from "../about/styles";
import { PageContainer } from "../globalStyles";
import { experiences } from "./constants";
import Exp from "./exp.png";
import {
  ExperienceBox,
  ExperienceContainer,
  ImgContainer,
  LeftContainer,
  RightContainer,
} from "./styles";

const Experience = () => {
  return (
    <PageContainer>
      <ExperienceContainer>
        <LeftContainer>
          <ImgContainer src={Exp} />
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
            </ExperienceBox>
          ))}
        </RightContainer>
      </ExperienceContainer>
    </PageContainer>
  );
};

export default Experience;
