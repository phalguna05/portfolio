import { styled } from "@mui/material";

const ExperienceContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-around",
  "@media screen and (max-width:720px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});

const LeftContainer = styled("div")({
  width: "40%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media screen and (max-width:720px)": {
    display: "none",
  },
});
const ImgContainer = styled("img")({
  width: "80%",
  height: "60%",
});

const RightContainer = styled("div")({
  width: "50%",
  height: "90%",
  marginTop: "2vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  "@media screen and (max-width:720px)": {
    width: "90%",
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
    height: "22%",
  },
});

export {
  ExperienceContainer,
  LeftContainer,
  RightContainer,
  ImgContainer,
  ExperienceBox,
};
