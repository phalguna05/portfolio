import { styled } from "@mui/material";
const ProjectsContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background:
    "linear-gradient(180deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)",
  "@media screen and (max-width:720px)": {
    flexDirection: "column",
  },
});

const ScrollableContainer = styled("div")({
  width: "95%",
  padding: "10px",
  height: "85%",
  overflowX: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  "@media screen and (max-width:720px)": {
    width: "95%",
    padding: "10px",
  },
});

const ProjectBox = styled("div")({
  width: "30%",
  height: "90%",
  minHeight: "30vh",
  marginBottom: "5vh",
  display: "flex",
  flexDirection: "column",
  opacity: "1",
  backgroundColor: "white",
  justifyContent: "space-evenly",
  alignItems: "center",
  borderRadius: "12px",
  padding: "5px",
  cursor: "pointer",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  ":hover": {
    opacity: "1",
    fontWeight: "bold",
    backgroundColor: "whitesmoke",
  },
  "@media screen and (max-width:720px)": {
    padding: "10px",
    width: "90%",
    height: "20%",
  },
});

const ImageContainer = styled("div")({
  width: "90%",
  height: "70%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media screen and (max-width:720px)": {
    display: "none",
  },
});

const ImgBox = styled("img")({
  width: "100%",
  height: "80%",
});

const TextContainer = styled("div")({
  width: "90%",
  overflow: "scroll",
  height: "80%",
  textAlign: "left",
  alignSelf: "center",

  "@media screen and (max-width:720px)": {
    width: "100%",
  },
});

export {
  ProjectsContainer,
  ScrollableContainer,
  ProjectBox,
  ImgBox,
  ImageContainer,
  TextContainer,
};
