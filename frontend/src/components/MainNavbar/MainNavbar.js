import React, { useState, useRef } from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import { logout } from "../../actions/authActions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: "transparent",
  },
  dropdown: {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: "2px #CECECE",
    padding: theme.spacing(1),
    backgroundColor: "#FFF",
    boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
    border: "solid 1px #f5f5f5",
  },
}));

function MainNavbar({ logout, auth }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  const logoutUser = () => {
    logout();
  };

  return (
    <>
      <div className="Navbar">
        <div className="Navbar-Brand">Dashu 0.1</div>
        <div className="Navbar-Links">
          <Avatar alt="Horvath Attila" src="/static/images/avatar/1.jpg" />
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className={classes.root}>
              <button
                className="userActionsBtn"
                type="button"
                onClick={handleClick}
              >
                <span className="userName">
                  {auth.user ? auth.user.name : null}
                </span>
                <ExpandMoreIcon />
              </button>
              {open ? (
                <div className={classes.dropdown}>
                  <MenuList>
                    <MenuItem onClick={logoutUser}>Logout</MenuItem>
                  </MenuList>
                </div>
              ) : null}
            </div>
          </ClickAwayListener>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(MainNavbar);
