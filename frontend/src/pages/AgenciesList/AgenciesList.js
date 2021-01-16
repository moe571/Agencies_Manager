import React, { useState } from "react";
import "./style.css";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { useMediaQuery } from "react-responsive";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import Button from "@material-ui/core/Button";
import { RiDashboard3Line } from "react-icons/ri";
import { BsFillGridFill } from "react-icons/bs";
import { RiBuilding4Line } from "react-icons/ri";
import { BiBox } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiEditAlt } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";
import MainNavbar from "../../components/MainNavbar/MainNavbar";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "2rem",
    border: "none",
    boxShadow: "none",
    color: "#a3b0bd",
    fontWeight: "bold",
  },
});

function AgenciesList() {
  const classes = useStyles();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [closeIcon, setCloseIcon] = useState(() =>
    isTabletOrMobile ? false : true
  );
  const [sideBar, setSideBar] = useState(true);
  return (
    <>
      <MainNavbar />
      <MenuIcon
        hidden={closeIcon ? true : false}
        onClick={() => setSideBar(true)}
        fontSize="large"
        className="openSideBarBtn"
      />
      <div className={sideBar ? "sidebar" : "sidebar hidden"}>
        <CloseIcon
          onClick={() => setSideBar(false)}
          hidden={closeIcon ? true : false}
          className="closeIcon"
        />
        <Paper className={classes.root}>
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <RiDashboard3Line fontSize="large" />
              </ListItemIcon>
              <Typography variant="inherit">Dashboard</Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <BsFillGridFill fontSize="large" />
              </ListItemIcon>
              <Typography variant="inherit">Categories</Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <RiBuilding4Line fontSize="large" />
              </ListItemIcon>
              <Typography variant="inherit" noWrap>
                Companies
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <BiBox fontSize="large" />
              </ListItemIcon>
              <Typography variant="inherit" noWrap>
                Agencies
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <FiSettings fontSize="large" />
              </ListItemIcon>
              <Typography variant="inherit" noWrap>
                Settings
              </Typography>
            </MenuItem>
          </MenuList>
        </Paper>
      </div>

      <div className="page-title">
        <h6>Agencies</h6>
      </div>
      <Paper className="agencies-container">
        <div className="agencies-table-header">
          <div className="agencies-header-element header-title">
            <h4>Agencies</h4>
            <p>134 Agencies</p>
          </div>
          <div className="agencies-header-element header-filter">
            <input placeholder="Filter by company , commune" type="text" />
            <ExpandMoreIcon className="expandMoreIcon" />
            <FiFilter className="FiFilterIcon" />
          </div>
          <div className="agencies-header-element header-search">
            <input placeholder="Search..." type="text" />
            <BiSearchAlt2 fontSize="large" className="BiSearchAltIcon" />
          </div>
          <div className="agencies-header-element header-action">
            <Button
              variant="contained"
              className="addAgencyBtn"
              startIcon={<ControlPointIcon />}
            >
              Add agency
            </Button>
          </div>
        </div>
        <div className="table">
          <div className="table-header">
            <div className="checkBoxesArea column">
              <Checkbox inputProps={{ "aria-label": "primary checkbox" }} />
            </div>
            <div className="nameArea column">
              <h6>Name</h6>
            </div>
            <div className="addressArea column">
              <h6>Address</h6>
            </div>
            <div className="wilayaArea column">
              <h6>Wilaya</h6>
            </div>
            <div className="phoneArea column">
              <h6>Phone</h6>
            </div>
            <div className="createdAtArea column">
              <h6>Created At</h6>
            </div>
            <div className="actionsArea column">
              <h6>Actions</h6>
            </div>
          </div>
          <div className="table-row">
            <div className="checkBoxesArea bodyColumn">
              <Checkbox inputProps={{ "aria-label": "primary checkbox" }} />
            </div>
            <div className="nameArea bodyColumn">
              <h6>Trust Bank</h6>
            </div>
            <div className="addressArea bodyColumn">
              <h6>Kouba, Algiers</h6>
            </div>
            <div className="wilayaArea bodyColumn">
              <h6>Algiers</h6>
            </div>
            <div className="phoneArea bodyColumn">
              <h6>023 10 30 23</h6>
            </div>
            <div className="createdAtArea bodyColumn">
              <h6>12 Nov 2020</h6>
            </div>
            <div className="actionsArea bodyColumn">
              <BiEditAlt
                style={{ fontSize: "1.5rem", color: "#5487fc" }}
                fontSize="large"
              />
              &nbsp; &nbsp; &nbsp;
              <HiOutlineTrash
                style={{ fontSize: "1.5rem", color: "#5487fc" }}
              />
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
}

export default AgenciesList;
