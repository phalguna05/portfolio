import { styled, Typography } from "@mui/material";
const ProjectsContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // background:
  //   "linear-gradient(180deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)",
  "@media screen and (max-width:720px)": {
    flexDirection: "column",
  },
});

const ScrollableContainer = styled("div")({
  width: "95%",
  padding: "1vh",
  height: "90%",
  overflowX: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  "@media screen and (max-width:720px)": {
    width: "95%",
    padding: "10px",
    flexDirection: "column",
  },
});

const ProjectBox = styled("div")({
  width: "60%",
  height: "40%",
  minHeight: "25vh",
  marginBottom: "2vh",
  marginTop: "2vh",
  display: "flex",
  opacity: "1",
  alignSelf: "flex-start",
  backgroundColor: "white",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: "5px",
  cursor: "pointer",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  ":hover": {
    opacity: "1",
    fontWeight: "bold",
    backgroundColor: "whitesmoke",
  },
  "@media screen and (max-width:720px)": {
    padding: "5px",
    width: "95%",
    marginBottom: "5px",
    height: "20%",
    minHeight: "30%",
  },
});

const ImageContainer = styled("div")({
  width: "40%",
  height: "100%",
  display: "flex",

  alignItems: "center",
  justifyContent: "center",
  "@media screen and (max-width:720px)": {
    display: "none",
  },
});

const ImgBox = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "40px 10px",
});

const TextContainer = styled("div")({
  width: "80%",
  overflow: "scroll",
  height: "90%",
  margin: "1vw",
  textAlign: "center",
  alignSelf: "center",

  "@media screen and (max-width:720px)": {
    width: "100%",
  },
});

const ProjectTitle = styled(Typography)({
  color: "#50C878",
  fontSize: "1.3vw",
  fontWeight: "900",
  fontFamily: "'Inter', sans-serif bold",
  display: "flex",
});

const Content = styled(Typography)({
  fontSize: "1vw",
  color: "black",
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

export {
  ProjectsContainer,
  ScrollableContainer,
  ProjectBox,
  ImgBox,
  ImageContainer,
  TextContainer,
  ProjectTitle,
  Content,
};
