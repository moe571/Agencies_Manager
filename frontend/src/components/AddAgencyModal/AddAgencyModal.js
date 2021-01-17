import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
function AddAgencyModal(props) {
  const {
    show,
    onHide,
    name,
    setName,
    address,
    setAddress,
    wilaya,
    setWilaya,
    commune,
    setCommune,
    phone,
    setPhone,
    handleAddForm,
  } = props;
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add an agency</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Wilaya</Form.Label>
              <Form.Control
                value={wilaya}
                onChange={(e) => setWilaya(e.target.value)}
                type="text"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Commune</Form.Label>
              <Form.Control
                value={commune}
                onChange={(e) => setCommune(e.target.value)}
                type="text"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddForm}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddAgencyModal;
