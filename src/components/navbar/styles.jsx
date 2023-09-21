import { IconButton, styled, Typography } from "@mui/material";

const NavigationContainer = styled("div")(({ open }) => ({
  width: "100%",
  height: open ? "35vh" : "8vh",
  display: "flex",
  overflow: "hidden",
  position: "fixed",
  zIndex: "100",
  justifyContent: "center",

  backdropFilter: "blur(5px)",
  backgroundColor: "rgba(0, 0, 0, .25)",
  background: "rgba(255, 255, 255, 0.15)",

  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",

  "@media screen and (max-width:720px)": {
    flexDirection: "column",
  },
}));

const InnerNavContainer = styled("div")({
  width: "100%",
  marginLeft: "3vw",
  marginRight: "3vw",
  marginTop: "1vh",
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

const LogoContainer = styled("img")({
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

const NavLink = styled(Typography)({
  fontWeight: "bold",
  cursor: "pointer",
  padding: "8px",
  color: "#020122",
  fontFamily: "'Inter', sans-serif",
  opacity: "0.8",
  ":hover": {
    backgroundColor: "#50FFB1",
    borderRadius: "8px",
    color: "#0a122a",
    opacity: "1",
    boxShadow:
      "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
  },
  ":active": {
    backgroundColor: "#3b4155",
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
export {
  NavigationContainer,
  LogoContainer,
  InnerNavContainer,
  NavItemsContainer,
  NavLink,
  MenuButton,
};
