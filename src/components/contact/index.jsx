import React from "react";
import { PageContainer } from "../globalStyles";
import { LearnMoreButton } from "../landing/styles";
import { ContactCard, ContactContainer, Text, Title } from "./styles";

const Contact = () => {
  return (
    <PageContainer>
      <ContactContainer>
        <ContactCard>
          <Title>Contact Me</Title>
          <Text>
            I am currently looking for co-op and full time opportunities. If you
            are hiring or if you know somebody who is hiring, please get in
            touch with me. If you want to just connect ping me on my socials,
            let's have a chat.
          </Text>
          <LearnMoreButton variant="outlined">Get in Touch</LearnMoreButton>
        </ContactCard>
      </ContactContainer>
    </PageContainer>
  );
};

export default Contact;
