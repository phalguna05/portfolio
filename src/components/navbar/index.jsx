import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Dialog from "./Dialog";
import {
  Circle,
  InnerNavContainer,
  MenuButton,
  NavigationContainer,
  NavItemsContainer,
  NavLink,
  TitleLink,
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
  const [scrollPosition, setScrollPosition] = React.useState(true);
  const handleScrollPos = () => {
    const position = window.pageYOffset;
    if (position >= window.innerHeight) {
      setScrollPosition(false);
    } else {
      setScrollPosition(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScrollPos, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <NavigationContainer open={open}>
      {open && <Dialog open={open} handleClose={handleClose} />}
      <InnerNavContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Circle />
          <TitleLink onClick={handleLogoClick}>Phalguna</TitleLink>
        </div>

        <MenuButton onClick={() => setOpen(!open)}>
          <MenuIcon fontSize="large" sx={{ color: "white" }} />
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
