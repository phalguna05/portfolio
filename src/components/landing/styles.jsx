import { Button, IconButton, styled, Typography } from "@mui/material";
import "../../index.css";

const LandingContainer = styled("div")({
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "space-between",
});

const TitleContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  wordBreak: "break-word",
  width: "50%",
  marginLeft: "5vw",
  alignItems: "flex-start",
  marginTop: "20vh",
  textAlign: "left",
});
const SalutaionText = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "white",
  opacity: "0.9",
  fontFamily: "'Didact Gothic', sans-serif",
});
const Caption = styled(Typography)({
  fontSize: "1.1rem",
  fontWeight: "bold",
  color: "white",
  opacity: "0.8",
  fontFamily: "'Didact Gothic', sans-serif",
  marginBottom: "8vh",
});
const Title = styled(Typography)({
  fontSize: "4rem",
  fontFamily: "'Alegreya Sans', sans-serif",
  color: "#87D68D",
  wordBreak: "break-word",
  marginBottom: "2vh",
  fontWeight: "bold",
});

const LearnMoreButton = styled(Button)({
  fontFamily: "'Didact Gothic', sans-serif",
  fontWeight: "bold",
  fontSize: "1rem",
  color: "#50FFB1",
  opacity: "0.9",
  textTransform: "capitalize",
  boxShadow:
    "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
});
const SocialsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "30%",

  marginRight: "2vw",
  marginTop: "25vh",
  height: "30vh",
  alignItems: "end",
});

const SocialButton = styled(IconButton)({
  color: "white",
  opacity: "0.8",
  ":hover": {
    opacity: "1",
    backgroundColor: "#50FFB1",
    borderRadius: "8px",
    color: "#0a122a",
  },
});

export {
  LandingContainer,
  TitleContainer,
  Title,
  SalutaionText,
  Caption,
  LearnMoreButton,
  SocialsContainer,
  SocialButton,
};
