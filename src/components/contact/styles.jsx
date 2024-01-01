import { styled, Typography } from "@mui/material";

const ContactContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage:
    "linear-gradient(180deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)",
  backgroundSize: "100% 50%",
  backgroundRepeat: "no-repeat",
  "@media screen and (max-width:720px)": {
    flexDirection: "column",
  },
});

const ThreedImage = styled("img")({
  width: "40vw",
  height: "50vh",
});

const RightContainer = styled("div")({
  width: "70%",
  height: "100%",
  "@media screen and (max-width:720px)": {
    height: "70%",
  },
});

const ContactCard = styled("div")({
  width: "60%",
  height: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  paddingLeft: "4vw",
  paddingRight: "4vw",
  paddingTop: "2vh",
  paddingBottom: "2vh",
  borderRadius: "12px",
  backgroundColor: "hsl(0deg 0% 98.04%)",
  "@media screen and (max-width:720px)": {
    width: "85%",
  },
});

const Title = styled(Typography)({
  fontSize: "3vw",
  fontFamily: "'Inter', sans-serif",
  color: "#87D68D",
  fontWeight: "bold",
  "@media screen and (max-width:720px)": {
    fontSize: "7vw",
  },
});

const Text = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: "bold",
  fontFamily: "'Inter', sans-serif",
  color: "black",
  textAlign: "justify",
  opacity: "1",
  lineHeight: "5vh",
  wordBreak: "break-word",
  "@media screen and (max-width:720px)": {
    fontSize: "3.5vw",
    opacity: "1",
    lineHeight: "3.5vh",
  },
});

const FooterContainer = styled("div")({});

export {
  ContactContainer,
  ContactCard,
  ThreedImage,
  Title,
  Text,
  RightContainer,
  FooterContainer,
};
