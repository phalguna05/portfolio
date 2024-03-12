import { IconButton, styled, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const NavigationContainer = styled("div")({
  width: "100%",
  height: "7vh",
  display: "flex",
  overflow: "hidden",
  top: "0",
  justifyContent: "center",
  transition: "all 1s ease-out",
  "@media screen and (max-width:720px)": {
    flexDirection: "column",
  },
});

const InnerNavContainer = styled("div")({
  width: "100%",
  marginLeft: "2vw",
  marginRight: "3vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@media screen and (max-width:720px)": {
    marginLeft: "1vw",
    marginRight: "1vw",
  },
});

const NavItemsContainer = styled("div")({
  display: "flex",
  width: "40%",
  justifyContent: "space-between",
  alignItems: "center",
  "@media screen and (max-width:820px)": {
    width: "60%",
  },
  "@media screen and (max-width:720px)": {
    display: "none",
  },
});

const LogoContainer = styled("div")({
  cursor: "pointer",
  width: "4vw",
  height: "5vh",
  ":hover": {
    boxShadow:
      "inset 0 0 10px #fff,inset 0 0 10px #f0f,inset 10px 0 20px #0ff, 0 0 10px #fff,-10px 0 20px #f0f,10px 0 20px #0ff",
    borderRadius: "50%",
    border: "0",
  },
  "@media screen and (max-width:720px)": {
    width: "10vw",
  },
});

const TitleLink = styled(Typography)({
  fontWeight: "800",
  cursor: "pointer",
  fontSize: "1.5vw",
  padding: "8px",
  color: "white",
  fontFamily: "'Inter', sans-serif",
  "@media screen and (max-width:720px)": {
    fontSize: "5vw",
  },
});

const NavLink = styled(Typography)({
  fontWeight: "bold",
  cursor: "pointer",
  padding: "8px",
  color: "white",
  fontFamily: "'Inter', sans-serif",
  opacity: "0.8",
  ":hover": {
    backgroundColor: "#50C878",
    borderRadius: "4px",
    color: "white",
    opacity: "1",
  },
});

const MenuButton = styled(IconButton)({
  display: "none",
  color: "white",

  "@media screen and (max-width:720px)": {
    display: "block",
    color: "#020122",
  },
});

// Define keyframes for different shapes
const squareAnimation = keyframes`
  0%, 20% {
    border-radius: 25%;
    transform: rotate(0deg);
  }
  25%, 45% {
    border-radius: 50%;
    background-color:red;
    transform: rotate(0deg);
  }
  50%, 70% {
    border-radius: 25%;
    background-color:orange;
    transform: rotate(180deg);
  }
  75%, 95% {
    border-radius: 50%;
    background-color:green;
    transform: rotate(180deg);
  }
  100% {
    border-radius: 25%;
    transform: rotate(360deg);
  }
`;

const Circle = styled("div")({
  width: "1.5vw",
  height: "1.5vw",
  backgroundColor: "blue",
  borderRadius: "50%",
  animation: `${squareAnimation} 4s infinite`,
  "@media screen and (max-width: 720px)": {
    width: "5vw",
    height: "5vw",
  },
});

export {
  NavigationContainer,
  LogoContainer,
  InnerNavContainer,
  NavItemsContainer,
  NavLink,
  MenuButton,
  TitleLink,
  Circle,
};
