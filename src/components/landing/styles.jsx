import { Button, IconButton, styled, Typography } from "@mui/material";
import "../../index.css";

const LandingContainer = styled("div")({
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "space-between",
  "@media screen and (max-width:720px)": {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

const TitleContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  wordBreak: "break-word",
  width: "50%",
  marginLeft: "5vw",
  alignItems: "flex-start",
  marginTop: "28vh",
  textAlign: "left",

  "@media screen and (max-width:720px)": {
    width: "90%",
    alignItems: "center",
    height: "40%",
    textAlign: "center",
  },
});
const SalutaionText = styled(Typography)({
  fontSize: "1.5vw",
  fontWeight: "bold",
  color: "#364156",
  opacity: "0.9",
  fontFamily: "'Raleway', sans-serif",
  "@media screen and (max-width:720px)": {
    fontSize: "4vw",
  },
});
const Caption = styled(Typography)({
  fontSize: "1.1vw",
  fontWeight: "bold",
  color: "#364156",
  opacity: "0.8",
  fontFamily: "'Raleway', sans-serif",
  marginBottom: "8vh",
  "@media screen and (max-width:720px)": {
    fontSize: "3vw",
  },
});
const Title = styled(Typography)({
  fontSize: "3.7vw",
  fontFamily: "'Alegreya Sans', sans-serif",
  color: "#11151C",
  wordBreak: "break-word",
  marginBottom: "2vh",
  fontWeight: "bold",
  "@media screen and (max-width:720px)": {
    fontSize: "8vw",
  },
});

const LearnMoreButton = styled(Button)({
  fontFamily: "'Raleway', sans-serif",
  fontWeight: "bold",
  fontSize: "1vw",
  color: "#364156",
  opacity: "1",
  textTransform: "capitalize",
  boxShadow:
    "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
  "@media screen and (max-width:720px)": {
    fontSize: "2.5vw",
  },
});
const SocialsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "30%",
  marginRight: "2vw",
  marginTop: "28vh",
  height: "30vh",
  alignItems: "end",
  "@media screen and (max-width:720px)": {
    flexDirection: "row",
    width: "60%",
    marginTop: "0",
    alignItems: "center",
    height: "10vh",
  },
});

const SocialButton = styled(IconButton)({
  color: "white",
  opacity: "0.8",
  ":hover": {
    opacity: "1",
    backgroundColor: "#50FFB1",
    borderRadius: "8px",
    color: "black",
  },
  "@media screen and (max-width:720px)": {
    color: "#020122",
  },
});

const BackgroundImg = styled("img")({
  width: "60%",
  height: "60%",
  zIndex: "-1",
});

const CompleteContainer = styled("div")({});

export {
  LandingContainer,
  TitleContainer,
  Title,
  SalutaionText,
  Caption,
  LearnMoreButton,
  SocialsContainer,
  SocialButton,
  BackgroundImg,
  CompleteContainer,
};
