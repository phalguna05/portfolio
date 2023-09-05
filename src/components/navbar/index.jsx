import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Logo from "./logo.png";
import {
  InnerNavContainer,
  LogoContainer,
  MenuButton,
  NavigationContainer,
  NavItemsContainer,
  NavLink,
} from "./styles";
const Links = ["About", "Experience", "Projects", "Certifications", "Contact"];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleScroll = (index) => {
    window.scroll({
      left: 0,
      top: window.innerHeight * (index + 1),
      behavior: "smooth",
    });
  };
  const handleLogoClick = () => {
    window.scroll({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <NavigationContainer open={open}>
      <InnerNavContainer>
        <LogoContainer src={Logo} onClick={handleLogoClick} />
        <MenuButton onClick={() => setOpen(!open)}>
          <MenuIcon fontSize="large" />
        </MenuButton>
        <NavItemsContainer>
          {Links.map((link, idx) => (
            <NavLink onClick={() => handleScroll(idx)}>{link}</NavLink>
          ))}
        </NavItemsContainer>
      </InnerNavContainer>
      <NavItemsContainer
        style={{
          display: open ? "flex" : "none",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {Links.map((link, idx) => (
          <NavLink onClick={() => handleScroll(idx)}>{link}</NavLink>
        ))}
      </NavItemsContainer>
    </NavigationContainer>
  );
};

export default Navbar;
