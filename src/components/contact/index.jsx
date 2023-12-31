import React from "react";
import { Heading } from "../about/styles";
import { PageContainer } from "../globalStyles";
import { LearnMoreButton } from "../landing/styles";
import { ContactCard, ContactContainer, FooterContainer, Text } from "./styles";

const Contact = () => {
  return (
    <PageContainer>
      <ContactContainer>
        <ContactCard>
          <Heading>Contact Me</Heading>

          <Text>
            I am currently looking for co-op and full time opportunities. If you
            are hiring or if you know somebody who is hiring, please get in
            touch with me. If you want to just connect ping me on my socials,
            let's have a chat.
          </Text>
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
