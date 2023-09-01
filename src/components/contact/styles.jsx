import { styled, Typography } from "@mui/material";

const ContactContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const ThreedImage = styled("img")({
  width: "40vw",
  height: "50vh",
});

const ContactCard = styled("div")({
  width: "40vw",
  height: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "8px",
  padding: "2vw",
  boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
  "@media screen and (max-width:720px)": {
    width: "80%",
  },
});

const Title = styled(Typography)({
  fontSize: "3vw",
  fontFamily: "'Raleway', sans-serif",
  color: "#87D68D",
  fontWeight: "bold",
  "@media screen and (max-width:720px)": {
    fontSize: "7vw",
  },
});

const Text = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: "bold",

  color: "black",

  textAlign: "justify",
  opacity: "1",
  wordBreak: "break-word",
  "@media screen and (max-width:720px)": {
    fontSize: "3.5vw",
    opacity: "1",
  },
});

export { ContactContainer, ContactCard, ThreedImage, Title, Text };
