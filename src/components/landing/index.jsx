import React from "react";
import About from "../about";
import Certifications from "../certifications";
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
        <LandingContainer>
          <Navbar />
          <TitleContainer>
            <SalutaionText>Hello there! I am,</SalutaionText>
            <Title>Phalguna Reddy Kadukuntla</Title>
            <Caption>
              A dedicated and innovative software engineer with a passion for
              crafting efficient and user-centric web applications.
            </Caption>
            <SocialsContainer>
              {icons.map((icon, idx) => (
                <SocialButton
                  onClick={() => {
                    window.open(urls[idx], "_blank");
                  }}
                >
                  {icon}
                </SocialButton>
              ))}
            </SocialsContainer>
            <LearnMoreButton
              variant="outlined"
              onClick={() =>
                window.scroll({
                  left: 0,
                  top: window.innerHeight,
                  behavior: "smooth",
                })
              }
            >
              Learn more about me...
            </LearnMoreButton>
          </TitleContainer>
        </LandingContainer>
      </PageContainer>
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </CompleteContainer>
  );
};

export default Landing;
