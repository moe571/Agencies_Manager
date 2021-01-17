import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
function AddAgencyModal(props) {
  const {
    show,
    onHide,
    handleClose,
    showAdd,
    handleCloseAdd,
    handleShowAdd,
  } = props;
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add an agency</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={""}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddAgencyModal;
