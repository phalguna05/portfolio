import { styled, Typography } from "@mui/material";
import "../../index.css";

const ExperienceContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  background:
    "linear-gradient(0deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)",
});

const LeftContainer = styled("div")({
  width: "100%",
  height: "20%",
  marginTop: "5vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media screen and (max-width:720px)": {
    height: "8vh",
    marginTop: "0vh",
  },
});
const ImgContainer = styled("img")({
  width: "80%",
  height: "60%",
});

const RightContainer = styled("div")({
  width: "90%",
  height: "90%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  "@media screen and (max-width:720px)": {
    width: "95%",
    height: "85%",
    alignItems: "center",
    flexDirection: "column",
  },
});

const ExperienceBox = styled("div")({
  width: "40%",
  minHeight: "50%",
  textAlign: "left",
  backgroundColor: "white",
  paddingTop: "4vh",
  paddingBottom: "4vh",
  paddingLeft: "1.5vw",
  paddingRight: "1.5vw",
  borderRadius: "12px",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "whitesmoke",
  },
  "@media screen and (max-width:720px)": {
    width: "95%",
    minHeight: "45%",
    padding: "5px",
  },
});
const Heading = styled(Typography)({
  fontSize: "2.5vw",
  fontFamily: "'Inter', sans-serif",
  color: "black",
  wordBreak: "break-word",
  fontWeight: "bold",
  border: "2px solid black",
  padding: "1vw",
  borderRadius: "8px",
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
  borderRadius: "14px",
  backgroundColor: "#0B132B",
  marginRight: "10px",
  marginBottom: "10px",
  color: "white",
  fontWeight: "bold",
  textAlign: "left",
  fontFamily: "'Inter', sans-serif",
  wordBreak: "break-word",
  "@media screen and (max-width:720px)": {
    fontSize: "2vw",
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
