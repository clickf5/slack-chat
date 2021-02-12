import React from 'react';
import {
  Modal, FormGroup, FormControl, Button,
} from 'react-bootstrap';

const AddChannelModal = (props) => {
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    isSubmitting,
    isValid,
    inputNameRef,
    isOpened,
    handleClose,
  } = props;

  return (
    <Modal show={isOpened}>
      <Modal.Header closeButton={() => handleClose()}>
        <Modal.Title>Add channel</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormControl
              className="mb-2"
              name="name"
              onChange={handleChange}
              value={values.name}
              ref={inputNameRef}
              isInvalid={!isValid}
            />
            <FormControl.Feedback type="invalid">
              {errors.name}
            </FormControl.Feedback>
            <div className="d-flex justify-content-end">
              <Button className="mr-2" variant="secondary" type="button" onClick={() => handleClose()}>Cancel</Button>
              <Button variant="primary" type="submit" disabled={isSubmitting}>Submit</Button>
            </div>
          </FormGroup>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddChannelModal;
