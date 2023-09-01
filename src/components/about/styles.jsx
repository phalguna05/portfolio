import { Paper, styled, Typography } from "@mui/material";
import "../../index.css";

const AboutContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  justifyContent: "space-around",
});
const HeadingContainer = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "7vh",
});

const ContentContainer = styled("div")({
  width: "100%",
  height: "95%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media screen and (max-width:720px)": {
    flexDirection: "column",
  },
});

const LeftTextContainer = styled("div")({
  width: "40%",
  height: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  // "@media screen and (max-width:720px)": {
  //   width: "90%",
  // },
});

const ContentBox = styled(Paper)({
  width: "60%",
  height: "60%",
  borderRadius: "14px",
  display: "flex",
  opacity: "0.9",
  backgroundColor: "white",
  justifyContent: "space-around",
  alignItems: "center",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  padding: "2vh",
  overflow: "hidden",
  "@media screen and (max-width:720px)": {
    height: "90%",
    width: "90%",
    opacity: "1",
    boxShadow: "0 0 10px #fff",
  },
});

const RightTextContainer = styled("div")({
  width: "50%",
  height: "80%",
  display: "flex",
  textAlign: "justify",
  flexDirection: "column",
  alignItems: "center",

  "@media screen and (max-width:720px)": {
    width: "90%",
  },
});
const Heading = styled(Typography)({
  fontSize: "2vw",
  fontFamily: "'Raleway', sans-serif",
  color: "#87D68D",
  wordBreak: "break-word",
  fontWeight: "bold",
  "@media screen and (max-width:720px)": {
    fontSize: "4vw",
  },
});

const Content = styled(Typography)({
  fontSize: "1vw",

  color: "black",
  fontWeight: "bold",
  textAlign: "left",
  opacity: "1",
  wordBreak: "break-word",
  "@media screen and (max-width:720px)": {
    fontSize: "3vw",
    opacity: "1",
  },
});

const ImgContainer = styled("img")({
  width: "100%",
  height: "55vh",
  borderRadius: "50%",
  cursor: "pointer",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  // mixBlendMode: "plus-lighter",
  "@media screen and (max-width:720px)": {
    display: "none",
  },
});
export {
  AboutContainer,
  HeadingContainer,
  RightTextContainer,
  LeftTextContainer,
  Heading,
  Content,
  ContentBox,
  ImgContainer,
  ContentContainer,
};
