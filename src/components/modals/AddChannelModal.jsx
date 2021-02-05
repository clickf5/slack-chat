import React from 'react';
import {
  Modal, FormGroup, FormControl, Button,
} from 'react-bootstrap';

const AddChannelModal = (props) => {
  const {
    isOpened,
    handleSubmit,
    handleChange,
    handleHide,
    values,
    errors,
    isSubmitting,
    isValid,
    inputRef,
  } = props;
  return (
    <Modal show={isOpened}>
      <Modal.Header closeButton={handleHide}>
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
              ref={inputRef}
              isInvalid={!isValid}
            />
            <FormControl.Feedback type="invalid">
              {errors.name}
            </FormControl.Feedback>
            <div className="d-flex justify-content-end">
              <Button className="mr-2" variant="secondary" type="button" onClick={handleHide}>Cancel</Button>
              <Button variant="primary" type="submit" disabled={isSubmitting}>Submit</Button>
            </div>
          </FormGroup>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddChannelModal;
