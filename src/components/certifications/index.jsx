import React from "react";
import { Content } from "../about/styles";
import { PageContainer } from "../globalStyles";
import Aws from "./aws.png";
import {
  CertificationsContainer,
  Heading,
  HeadingContainer,
  ImageContainer,
  LeftContainer,
} from "./styles";

const Certifications = () => {
  return (
    <PageContainer>
      <CertificationsContainer>
        <HeadingContainer>
          <Heading>Certifications</Heading>
          <Content></Content>
        </HeadingContainer>
        <LeftContainer>
          <ImageContainer src={Aws} />
        </LeftContainer>
      </CertificationsContainer>
    </PageContainer>
  );
};

export default Certifications;
