import React from "react";
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
        </HeadingContainer>
        <LeftContainer>
          <ImageContainer src={Aws} />
        </LeftContainer>
      </CertificationsContainer>
    </PageContainer>
  );
};

export default Certifications;
