import React from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
function EditAgencyModal(props) {
  const {
    show,
    onHide,
    updateAgencyForm,
    selectedAgency,
    setSelectedAgency,
  } = props;
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit agency</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={selectedAgency.name}
                onChange={(e) =>
                  setSelectedAgency({
                    ...selectedAgency,
                    name: e.target.value,
                  })
                }
                type="text"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={selectedAgency.address}
                onChange={(e) =>
                  setSelectedAgency({
                    ...selectedAgency,
                    address: e.target.value,
                  })
                }
                type="text"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Wilaya</Form.Label>
              <Form.Control
                value={selectedAgency.wilaya}
                onChange={(e) =>
                  setSelectedAgency({
                    ...selectedAgency,
                    wilaya: e.target.value,
                  })
                }
                type="text"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Commune</Form.Label>
              <Form.Control
                value={selectedAgency.commune}
                onChange={(e) =>
                  setSelectedAgency({
                    ...selectedAgency,
                    commune: e.target.value,
                  })
                }
                type="text"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                value={selectedAgency.phone}
                onChange={(e) =>
                  setSelectedAgency({
                    ...selectedAgency,
                    phone: e.target.value,
                  })
                }
                type="text"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={updateAgencyForm}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditAgencyModal;
