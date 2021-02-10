import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../slices/modalSlice';

const actionCreators = {
  handleOpen: openModal,
};

const AddChannelButton = (props) => {
  const { handleOpen } = props;
  const payload = {
    type: 'addChannel',
    extra: null,
  };
  return (
    <button
      type="button"
      className="ml-auto p-0 btn btn-link"
      onClick={() => handleOpen(payload)}
    >
      +
    </button>
  );
};

export default connect(null, actionCreators)(AddChannelButton);
