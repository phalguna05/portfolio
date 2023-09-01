import React from "react";
import About from "../about";
import Contact from "../contact";
import Experience from "../experience";
import { PageContainer } from "../globalStyles";
import Navbar from "../navbar";
import Projects from "../projects";
import { icons, urls } from "./constants";
import {
  Caption,
  CompleteContainer,
  LandingContainer,
  LearnMoreButton,
  SalutaionText,
  SocialButton,
  SocialsContainer,
  Title,
  TitleContainer,
} from "./styles";

const Landing = () => {
  return (
    <CompleteContainer>
      <PageContainer>
        <Navbar />
        <LandingContainer>
          <TitleContainer>
            <SalutaionText>Hello there! I am,</SalutaionText>
            <Title>Phalguna Reddy Kadukuntla</Title>
            <Caption>
              A dedicated and innovative software engineer with a passion for
              crafting efficient and user-centric web applications.
            </Caption>
            <LearnMoreButton variant="outlined">
              Learn more about me...
            </LearnMoreButton>
          </TitleContainer>
          <SocialsContainer>
            {icons.map((icon, idx) => (
              <SocialButton
                sx={{ color: "white", opacity: "0.8" }}
                onClick={() => {
                  window.open(urls[idx], "_blank");
                }}
              >
                {icon}
              </SocialButton>
            ))}
          </SocialsContainer>
        </LandingContainer>
      </PageContainer>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </CompleteContainer>
  );
};

export default Landing;
