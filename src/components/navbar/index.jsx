import React from "react";
import Logo from "./logo.png";
import {
  InnerNavContainer,
  LogoContainer,
  NavigationContainer,
  NavItemsContainer,
  NavLink,
} from "./styles";

const Links = ["About", "Experience", "Projects", "Contact"];

const Navbar = () => {
  const handleScroll = (index) => {
    window.scroll({
      left: 0,
      top: window.innerHeight * (index + 1),
      behavior: "smooth",
    });
  };
  return (
    <NavigationContainer>
      <InnerNavContainer>
        <LogoContainer src={Logo} />
        <NavItemsContainer>
          {Links.map((link, idx) => (
            <NavLink onClick={() => handleScroll(idx)}>{link}</NavLink>
          ))}
        </NavItemsContainer>
      </InnerNavContainer>
    </NavigationContainer>
  );
};

export default Navbar;
