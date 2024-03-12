import { styled, Typography } from "@mui/material";
import "../../index.css";

const ExperienceContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  // background:
  //   "linear-gradient(0deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)",
});

const LeftContainer = styled("div")({
  width: "100%",
  height: "20%",
  marginTop: "2vh",
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
  width: "100%",
  height: "90%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  "@media screen and (max-width:720px)": {
    width: "95%",
    height: "85%",
    alignItems: "left",
    flexDirection: "column",
    overflowY: "scroll",
  },
});

const ExperienceBox = styled("div")({
  width: "90%",
  textAlign: "left",

  paddingLeft: "1.5vw",
  paddingRight: "1.5vw",
  borderRadius: "4px",
  alignItems: "center",
  display: "flex",

  flexDirection: "column",
  cursor: "pointer",

  "@media screen and (max-width:720px)": {
    width: "95%",
    minHeight: "45%",
    padding: "5px",
  },
});
const Heading = styled(Typography)({
  fontSize: "2.5vw",
  fontFamily: "'Inter', sans-serif",
  color: "#50C878",
  wordBreak: "break-word",
  fontWeight: "bold",
  padding: "1vw",

  borderBottom: "2px solid white",
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
  backgroundColor: "#007339",
  marginRight: "10px",
  marginBottom: "10px",
  color: "white",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
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
