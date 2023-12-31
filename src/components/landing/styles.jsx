import { Button, IconButton, styled, Typography } from "@mui/material";
import "../../index.css";
const LandingContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  alignItems: "center",
  background:
    "linear-gradient(0deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)",
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
  width: "100%",
  height: "60%",
  alignItems: "center",
  marginTop: "20vh",
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
  fontFamily: "'Inter', sans-serif",
  "@media screen and (max-width:720px)": {
    fontSize: "4vw",
  },
});
const Caption = styled(Typography)({
  fontSize: "1.1vw",
  fontWeight: "bold",
  color: "#364156",
  fontFamily: "'Inter', sans-serif",
  marginBottom: "2vh",
  "@media screen and (max-width:720px)": {
    fontSize: "3vw",
  },
});
const Title = styled(Typography)({
  fontSize: "3.7vw",
  fontFamily: "'Inter', sans-serif",
  wordBreak: "break-word",
  marginBottom: "2vh",
  fontWeight: "bold",

  backgroundClip: "text",
  color: "black",
  "@media screen and (max-width:720px)": {
    fontSize: "8vw",
  },
});

const LearnMoreButton = styled(Button)({
  fontWeight: "bold",
  fontSize: "1vw",
  color: "#364156",
  fontFamily: "'Inter', sans-serif",
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
  justifyContent: "space-around",
  width: "20%",
  alignItems: "center",
  marginBottom: "3vh",
  "@media screen and (max-width:720px)": {
    flexDirection: "row",
    width: "60%",
    marginTop: "0",
    alignItems: "center",
    height: "10vh",
  },
});

const SocialButton = styled(IconButton)({
  color: "black",
  opacity: "1",
  ":hover": {
    opacity: "1",
    backgroundColor: "black",
    borderRadius: "8px",
    color: "white",
  },
  "@media screen and (max-width:720px)": {
    color: "black",
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
