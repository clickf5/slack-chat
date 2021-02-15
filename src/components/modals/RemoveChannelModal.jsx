import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Modal, Button, FormControl,
} from 'react-bootstrap';
import routes from '../../routes';
import { closeModal } from '../../slices/modalSlice';

const mapStateToProps = (state) => {
  const { modal: { isOpened, extra: { channelId } } } = state;
  return { isOpened, channelId };
};

const actionCreators = {
  handleClose: closeModal,
};

const RemoveChannelModal = (props) => {
  const {
    isOpened,
    channelId,
    handleClose,
  } = props;

  const [isSubmitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const channelPath = routes.channelPath(channelId);

  const handleClick = async () => {
    try {
      setSubmitting(true);
      await axios.delete(channelPath);
      setSubmitting(false);
      handleClose();
    } catch (e) {
      setErrors({ name: 'Network Error' });
    }
  };

  return (
    <Modal show={isOpened} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Delete channel</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you shure?</p>
        <FormControl.Feedback type="invalid">
          {errors.name}
        </FormControl.Feedback>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" variant="secondary" type="button" onClick={() => handleClose()}>Cancel</Button>
          <Button variant="danger" type="submit" disabled={isSubmitting} onClick={handleClick}>Confirm</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default connect(mapStateToProps, actionCreators)(RemoveChannelModal);
