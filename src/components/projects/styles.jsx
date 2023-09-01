import { styled } from "@mui/material";

const ProjectsContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const ScrollableContainer = styled("div")({
  width: "70%",
  padding: "10px",
  height: "85%",
  marginTop: "5vh",
  overflowY: "auto",
  display: "flex",

  flexDirection: "column",
  "@media screen and (max-width:720px)": {
    width: "95%",
    padding: "10px",
    alignItems: "center",
  },
});

const ProjectBox = styled("div")({
  width: "75%",
  height: "30vh",
  minHeight: "30vh",
  marginBottom: "5vh",
  display: "flex",
  opacity: "1",
  backgroundColor: "white",
  justifyContent: "space-evenly",
  alignItems: "center",
  borderRadius: "8px",
  padding: "5px",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  ":hover": {
    opacity: "1",
    fontWeight: "bold",
  },
  "@media screen and (max-width:720px)": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: "10px",
    width: "90%",
    borderRadius: "8px",
    boxShadow: "0 0 10px #fff",
  },

  ":nth-child(2)": {
    alignSelf: "flex-end",
  },
  ":nth-child(1)": {},
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
  height: "80%",
  boxShadow:
    "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  border: "2px solid #03312E",

  ":hover": {
    opacity: "1",
    boxShadow: "0 5px 20px #87D68D",
  },
});

const TextContainer = styled("div")({
  width: "50%",
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
