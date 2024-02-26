import React from "react";
import { Content } from "../about/styles";
import { Heading } from "../experience/styles";
import { PageContainer } from "../globalStyles";
import { LearnMoreButton } from "../landing/styles";
import ContactImg from "./contact.svg";
import { ContactCard, ContactContainer, FooterContainer } from "./styles";
const Contact = () => {
  return (
    <PageContainer>
      <ContactContainer>
        <img src={ContactImg} style={{ width: "40%", height: "60%" }} />
        <ContactCard>
          <Heading>Contact Me</Heading>

          <Content sx={{ fontSize: "1.2vw" }}>
            I am currently looking for co-op and full time opportunities. If you
            are hiring or if you know somebody who is hiring, please get in
            touch with me. If you want to just connect ping me on my socials,
            let's have a chat.
          </Content>
          <LearnMoreButton
            variant="outlined"
            onClick={() => window.open("mailto:phalgunakadukuntla05@gmail.com")}
          >
            Get in Touch
          </LearnMoreButton>
        </ContactCard>

        <FooterContainer></FooterContainer>
      </ContactContainer>
    </PageContainer>
  );
};

export default Contact;
