import { styled, Typography } from "@mui/material";
import "../../index.css";

const CertificationsContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});

const LeftContainer = styled("div")({
  width: "70%",
  height: "90%",
  marginTop: "2vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  "@media screen and (max-width:720px)": {
    width: "90%",
    alignItems: "center",
  },
});

const Heading = styled(Typography)({
  fontSize: "4.5vw",
  fontFamily: "'Inter', sans-serif",
  color: "transparent",
  wordBreak: "break-word",
  fontWeight: "bold",
  transform: "rotate(-90deg)",
  backgroundImage: "linear-gradient(to right, #553c9a 45%, #ee4b2b)",
  backgroundClip: "text",
  "@media screen and (max-width:720px)": {
    fontSize: "4vw",
  },
});

const ImageContainer = styled("img")({
  width: "80%",
  height: "80%",
  boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
  borderRadius: "8px",
});

export { CertificationsContainer, LeftContainer, Heading, ImageContainer };
