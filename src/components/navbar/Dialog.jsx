import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { NavItemsContainer, NavLink } from "./styles";
const Links = ["About", "Experience", "Projects", "Certifications", "Contact"];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function FullDialog({ open, handleClose }) {
  const handleScroll = (index) => {
    window.scroll({
      left: 0,
      top: window.innerHeight * (index + 1),
      behavior: "smooth",
    });
  };
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        style={{}}
      >
        <div
          style={{
            background:
              "radial-gradient(circle, hsla(210, 100%, 12%, 1) 0%, hsla(227, 100%, 25%, 1) 100%)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <Toolbar style={{ display: "flex", alignContent: "flex-end" }}>
            <IconButton
              edge="start"
              onClick={handleClose}
              aria-label="close"
              style={{ color: "white", float: "right" }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>

          <NavItemsContainer
            style={{
              display: open ? "flex" : "none",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {Links.map((link, idx) => (
              <NavLink
                onClick={() => {
                  handleClose();
                  handleScroll(idx);
                }}
              >
                {link}
              </NavLink>
            ))}
          </NavItemsContainer>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
