import { Button, IconButton, styled, Typography } from "@mui/material";
import "../../index.css";
const LandingContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  alignItems: "center",
  // background:
  //   "linear-gradient(0deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)",
  "@media screen and (max-width:720px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});

const WallpaperContainer = styled("img")({
  display: "flex",
  width: "50%",
  height: "100%",
});

const TitleContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  wordBreak: "break-word",
  width: "45%",
  height: "70%",
  alignItems: "center",
  marginTop: "25vh",
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
  color: "white",
  fontFamily: "'Inter', sans-serif",
  "@media screen and (max-width:720px)": {
    fontSize: "4vw",
  },
});
const Caption = styled(Typography)({
  fontSize: "1.1vw",
  fontWeight: "bold",
  color: "white",
  fontFamily: "'Inter', sans-serif",
  marginBottom: "2vh",
  "@media screen and (max-width:720px)": {
    fontSize: "3vw",
  },
});
const Title = styled(Typography)({
  fontSize: "3vw",
  fontFamily: "'Inter', sans-serif",
  wordBreak: "break-word",
  marginBottom: "2vh",
  fontWeight: "bold",
  color: "#50C878",
  backgroundClip: "text",

  "@media screen and (max-width:720px)": {
    fontSize: "8vw",
  },
});

const LearnMoreButton = styled(Button)({
  fontWeight: "bolder",
  fontSize: "1vw",
  color: "white",
  backgroundColor: "#007339",
  fontFamily: "'Inter', sans-serif",
  opacity: "1",
  textTransform: "capitalize",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  "@media screen and (max-width:720px)": {
    fontSize: "2.5vw",
  },
  ":hover": {
    backgroundColor: "#006B44",
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
  color: "white",
  opacity: "1",
  ":hover": {
    opacity: "1",
    backgroundColor: "white",
    borderRadius: "8px",
    color: "#001F3F",
  },
  "@media screen and (max-width:720px)": {
    color: "#07393C",
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
  WallpaperContainer,
};
