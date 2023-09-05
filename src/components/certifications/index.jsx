import React from "react";
import { HeadingContainer } from "../about/styles";
import { PageContainer } from "../globalStyles";
import Aws from "./aws.png";
import {
  CertificationsContainer,
  Heading,
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
