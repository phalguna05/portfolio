import { styled, Typography } from "@mui/material";
import "../../index.css";

const CertificationsContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  // background:
  //   "linear-gradient(0deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)",
  "@media screen and (max-width:720px)": {
    flexDirection: "column",
  },
});

const LeftContainer = styled("div")({
  width: "60%",
  height: "100%",
  marginTop: "2vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  "@media screen and (max-width:720px)": {
    width: "95%",
    alignItems: "center",
  },
});

const Heading = styled(Typography)({
  fontSize: "3vw",
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
const HeadingContainer = styled("div")({
  width: "50%",
  height: "90%",
  display: "flex",
  justifyContent: "center",

  alignItems: "center",
  "@media screen and (max-width:720px)": {
    height: "10vh",
    marginTop: "5vh",
  },
});
const ImageContainer = styled("img")({
  width: "90%",
  height: "60%",
  borderRadius: "40px 20px",
  "@media screen and (max-width:720px)": {
    height: "70%",
  },
});

export {
  CertificationsContainer,
  LeftContainer,
  Heading,
  ImageContainer,
  HeadingContainer,
};
