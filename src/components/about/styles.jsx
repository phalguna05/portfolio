import { styled, Typography } from "@mui/material";
import "../../index.css";

const AboutContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "100%",
  alignItems: "center",
  // backgroundImage:
  //   "linear-gradient(180deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)",
  backgroundSize: "100% 50%",
  backgroundRepeat: "no-repeat",
  justifyContent: "space-around",
  "@media screen and (max-width:720px)": {
    flexDirection: "column",
  },
});
const HeadingContainer = styled("div")({
  width: "50%",
  height: "10%",
  marginBottom: "2vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media screen and (max-width:720px)": {
    height: "10vh",
    marginTop: "5vh",
  },
});

const ContentContainer = styled("div")({
  width: "90%",
  height: "95%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "0vh",
  "@media screen and (max-width:720px)": {
    flexDirection: "column",
    width: "95%",
    height: "60%",
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
  "@media screen and (max-width:720px)": {
    display: "none",
  },
});

const ContentBox = styled("div")({
  width: "100%",
  height: "70%",
  borderRadius: "4px",
  display: "flex",
  // backgroundColor: "white",
  justifyContent: "space-around",
  alignItems: "center",
  // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  // boxShadow:
  //   "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  padding: "2vh",
  overflow: "hidden",
  "@media screen and (max-width:720px)": {
    height: "90%",
    width: "100%",
    opacity: "1",
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
  fontSize: "3vw",
  fontFamily: "'Inter', sans-serif",
  color: "black",
  wordBreak: "break-word",
  fontWeight: "bold",
  padding: "1vw",
  "@media screen and (max-width:720px)": {
    fontSize: "4vw",
    transform: "none",
  },
});

const Content = styled(Typography)({
  fontSize: "1vw",
  color: "white",
  fontWeight: "bold",
  textAlign: "left",
  overflow: "scroll",
  fontFamily: "'Inter', sans-serif",
  wordBreak: "break-word",
  "@media screen and (max-width:720px)": {
    fontSize: "3vw",
    opacity: "1",
    lineHeight: "2.5vh",
  },
});

const ImgContainer = styled("img")({
  width: "40vw",
  height: "70vh",
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
