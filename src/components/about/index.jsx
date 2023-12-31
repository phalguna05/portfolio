import { Typography } from "@mui/material";
import React from "react";
import { PageContainer } from "../globalStyles";
import {
  AboutContainer,
  Content,
  ContentBox,
  ContentContainer,
  RightTextContainer,
} from "./styles";

const About = () => {
  return (
    <PageContainer>
      <AboutContainer>
        <ContentContainer>
          <ContentBox elevation={3}>
            <RightTextContainer>
              <Typography
                sx={{
                  fontSize: "4vh",
                  fontWeight: "bold",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                More about me
              </Typography>
              <Content
                sx={{ fontSize: "2vh", marginTop: "2vh", lineHeight: "3.5vh" }}
              >
                Hello! I'm Phalguna Reddy Kadukuntla, a dedicated and innovative
                software engineer with a passion for crafting efficient and
                user-centric web applications. I am a masters student at
                University of Florida and my major is Computer and Information
                Science.<br></br>My technical toolkit includes a wide range of
                programming languages such as C, Java, Python, JavaScript, PHP,
                HTML, and CSS. I have extensive experience in web technologies
                including React, Node.js, Express.js, GraphQL, Material UI, and
                Bootstrap. In the realm of databases, I'm proficient in MySQL,
                SQL, as well as NoSQL databases like MongoDB and Firebase. With
                a solid educational background and hands-on experience in the
                tech industry, I bring a wealth of skills and expertise to the
                table.
              </Content>
            </RightTextContainer>
          </ContentBox>
        </ContentContainer>
      </AboutContainer>
    </PageContainer>
  );
};
export default About;
