import React from 'react';
import { connect } from 'react-redux';
import AddChannelModalContainer from './AddChannelModalContainer';

const modals = {
  addChannel: AddChannelModalContainer,
};

const getModal = (type) => modals[type];

const mapStateToProps = (state) => {
  const { modal: { type, extra } } = state;
  return { type, extra };
};

const Modal = (props) => {
  const { type, extra } = props;
  if (!type) {
    return null;
  }

  const Component = getModal(type);
  return <Component extra={extra} />;
};

export default connect(mapStateToProps)(Modal);
