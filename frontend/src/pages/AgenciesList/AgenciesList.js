import React, { useState, useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
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
import AddAgencyModal from "../../components/AddAgencyModal/AddAgencyModal";
import EditAgencyModal from "../../components/EditAgencyModal/EditAgencyModal";
import moment from "moment";
import Modal from "react-bootstrap/Modal";

import {
  addAgency,
  deleteAgency,
  getAgencies,
  updateAgency,
} from "../../actions/AgencyActions";

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

function AgenciesList(props) {
  const classes = useStyles();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [closeIcon, setCloseIcon] = useState(() =>
    isTabletOrMobile ? false : true
  );
  const agencies = useSelector((state) => state.agency.agencies);
  const [sideBar, setSideBar] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAgencies());
  }, [dispatch, getAgencies]);

  // ADD Agency Modal
  const [showAdd, setShowAdd] = useState(false);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [commune, setCommune] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddForm = (e) => {
    e.preventDefault();
    const newAgency = {
      name,
      address,
      wilaya,
      commune,
      phone,
    };
    setName("");
    setAddress("");
    setWilaya("");
    setCommune("");
    setPhone("");

    dispatch(addAgency(newAgency));
    setShowAdd(false);
  };

  // EDIT Agency Modal
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [selectedAgency, setSelectedAgency] = useState([]);
  const editAgencyOpen = (_id, name, address, wilaya, commune, phone) => {
    setSelectedAgency({
      _id: _id,
      name: name,
      address: address,
      wilaya: wilaya,
      commune: commune,
      phone: phone,
    });
    setShowEdit(true);
  };

  const updateAgencyForm = () => {
    const form = selectedAgency;
    dispatch(updateAgency(form._id, form));

    setShowEdit(false);
    window.location.reload(false);
  };

  // REMOVE Agency
  const [removeAgencyModal, setRemoveAgencyModal] = useState(false);
  const removeAgencyClose = () => setRemoveAgencyModal(false);
  const [removedAgency, setRemovedAgency] = useState(null);

  const removeAgencyOpen = (_id) => {
    setRemovedAgency(_id);

    setRemoveAgencyModal(true);
  };
  const removeAgency = () => {
    dispatch(deleteAgency(removedAgency));
    dispatch(getAgencies());

    setRemoveAgencyModal(false);
  };
  return (
    <>
      <MainNavbar />
      <AddAgencyModal
        show={showAdd}
        onHide={handleCloseAdd}
        name={name}
        setName={setName}
        address={address}
        setAddress={setAddress}
        wilaya={wilaya}
        setWilaya={setWilaya}
        commune={commune}
        setCommune={setCommune}
        phone={phone}
        setPhone={setPhone}
        handleAddForm={handleAddForm}
      />
      <EditAgencyModal
        show={showEdit}
        onHide={handleCloseEdit}
        selectedAgency={selectedAgency}
        setSelectedAgency={setSelectedAgency}
        updateAgencyForm={updateAgencyForm}
      />
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
              onClick={handleShowAdd}
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
          {agencies ? (
            agencies.map((agency) => (
              <div className="table-row">
                <div className="checkBoxesArea bodyColumn">
                  <Checkbox inputProps={{ "aria-label": "primary checkbox" }} />
                </div>
                <div className="nameArea bodyColumn">
                  <h6>{agency.name}</h6>
                </div>
                <div className="addressArea bodyColumn">
                  <h6>{agency.address}</h6>
                </div>
                <div className="wilayaArea bodyColumn">
                  <h6>{agency.wilaya}</h6>
                </div>
                <div className="phoneArea bodyColumn">
                  <h6>{agency.phone}</h6>
                </div>
                <div className="createdAtArea bodyColumn">
                  <h6>{moment(agency.register_date).format("ll")}</h6>
                </div>
                <div className="actionsArea bodyColumn">
                  <BiEditAlt
                    onClick={() =>
                      editAgencyOpen(
                        agency._id,
                        agency.name,
                        agency.address,
                        agency.commune,
                        agency.wilaya,
                        agency.phone
                      )
                    }
                    style={{
                      fontSize: "1.5rem",
                      color: "#5487fc",
                      cursor: "pointer",
                    }}
                    fontSize="large"
                  />
                  &nbsp; &nbsp; &nbsp;
                  <HiOutlineTrash
                    onClick={() => removeAgencyOpen(agency._id)}
                    style={{
                      fontSize: "1.5rem",
                      color: "#5487fc",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Paper>

      {/* ------------------Remove Agency Modal------------------------ */}

      <Modal show={removeAgencyModal} onHide={removeAgencyClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Agency</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Are you sure you want to remove the agency ?</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={removeAgencyClose}>
            Close
          </Button>
          <Button variant="danger" onClick={removeAgency}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AgenciesList;
