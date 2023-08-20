import { styled, Typography } from "@mui/material";

const NavigationContainer = styled("div")({
  width: "100%",
  height: "6vh",
  display: "flex",
  marginTop: "2vh",
});

const InnerNavContainer = styled("div")({
  width: "100%",
  marginLeft: "3vw",
  marginRight: "3vw",
  display: "flex",
  justifyContent: "space-between",
});

const NavItemsContainer = styled("div")({
  display: "flex",
  width: "40%",
  justifyContent: "space-between",
  alignItems: "center",
});

const LogoContainer = styled("img")({
  width: "3vw",
  height: "5vh",
});

const NavLink = styled(Typography)({
  fontWeight: "bold",
  cursor: "pointer",
  padding: "8px",
  color: "white",
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

export {
  NavigationContainer,
  LogoContainer,
  InnerNavContainer,
  NavItemsContainer,
  NavLink,
};
