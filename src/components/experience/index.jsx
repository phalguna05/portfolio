import React from "react";
import { PageContainer } from "../globalStyles";
import {
  ExperienceContainer,
  Heading,
  LeftContainer,
  RightContainer,
} from "./styles";
import TimelineComponent from "./TimelineComponent";

const Experience = () => {
  return (
    <PageContainer>
      <ExperienceContainer>
        <LeftContainer>
          <Heading>Experience</Heading>
        </LeftContainer>
        <RightContainer>
          <TimelineComponent />
        </RightContainer>
      </ExperienceContainer>
    </PageContainer>
  );
};

export default Experience;
