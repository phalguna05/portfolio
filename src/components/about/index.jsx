import { Grow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PageContainer } from "../globalStyles";
import Profile from "./profile.jpeg";
import {
  AboutContainer,
  Content,
  ContentBox,
  ContentContainer,
  Heading,
  ImgContainer,
  LeftTextContainer,
  RightTextContainer,
} from "./styles";

const About = () => {
  const [check, setCheck] = useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    if (scrollPosition > window.innerHeight / 2) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <PageContainer>
      <AboutContainer>
        {/* <HeadingContainer>
          <Heading>About Me</Heading>
        </HeadingContainer> */}
        <ContentContainer>
          <Grow
            in={check}
            style={{ transformOrigin: "0 0 0" }}
            {...(check ? { timeout: 1000 } : {})}
          >
            <ContentBox elevation={3}>
              <LeftTextContainer>
                <ImgContainer src={Profile} />
              </LeftTextContainer>
              <RightTextContainer>
                <Heading>About Me</Heading>
                <Content>
                  Hello! I'm Phalguna Reddy Kadukuntla, a dedicated and
                  innovative software engineer with a passion for crafting
                  efficient and user-centric web applications. With a solid
                  educational background and hands-on experience in the tech
                  industry, I bring a wealth of skills and expertise to the
                  table. With a solid educational background and hands-on
                  experience in the tech industry, I bring a wealth of skills
                  and expertise to the table. With a solid educational
                  background and hands-on experience in the tech industry, I
                  bring a wealth of skills and expertise to the table. With a
                  solid educational background and hands-on experience in the
                  tech industry, I bring a wealth of skills and expertise to the
                  table.
                </Content>
              </RightTextContainer>
            </ContentBox>
          </Grow>
        </ContentContainer>
      </AboutContainer>
    </PageContainer>
  );
};
export default About;
