import { styled, Typography } from "@mui/material";
import "../../index.css";

const ExperienceContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  "@media screen and (max-width:720px)": {
    flexDirection: "column",
  },
});

const LeftContainer = styled("div")({
  width: "30%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media screen and (max-width:720px)": {
    height: "10vh",
    marginTop: "5vh",
  },
});
const ImgContainer = styled("img")({
  width: "80%",
  height: "60%",
});

const RightContainer = styled("div")({
  width: "70%",
  height: "90%",
  marginTop: "2vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  "@media screen and (max-width:720px)": {
    width: "95%",
    height: "50%",
    alignItems: "center",
  },
});

const ExperienceBox = styled("div")({
  width: "70%",
  height: "30%",
  textAlign: "left",
  backgroundColor: "white",
  padding: "10px",
  borderRadius: "8px",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",

  "@media screen and (max-width:720px)": {
    width: "95%",
    height: "40%",
  },
});
const Heading = styled(Typography)({
  fontSize: "5vw",
  fontFamily: "'Inter', sans-serif",
  color: "transparent",
  wordBreak: "break-word",
  fontWeight: "bold",
  transform: "rotate(-90deg)",
  backgroundImage: "linear-gradient(to right, #553c9a 45%, #ee4b2b)",
  backgroundClip: "text",
  "@media screen and (max-width:720px)": {
    fontSize: "4vw",
    transform: "none",
  },
});

const Tag = styled(Typography)({
  fontSize: "1vw",
  padding: "5px",
  paddingLeft: "10px",
  paddingRight: "10px",
  borderRadius: "10px",
  backgroundColor: "#009F93",
  opacity: "0.9",
  boxShadow: "rgb(38, 57, 77) 0px 10px 30px -10px",
  marginRight: "10px",
  color: "white",
  fontWeight: "bold",
  textAlign: "left",
  fontFamily: "'Inter', sans-serif",
  wordBreak: "break-word",
  "@media screen and (max-width:720px)": {
    fontSize: "3vw",
    opacity: "1",
    width: "20vw",
    marginBottom: "10px",
  },
});

export {
  ExperienceContainer,
  LeftContainer,
  RightContainer,
  ImgContainer,
  ExperienceBox,
  Heading,
  Tag,
};
