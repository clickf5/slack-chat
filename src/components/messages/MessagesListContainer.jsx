import React from 'react';
import { connect } from 'react-redux';
import MessagesList from './MessagesList';
import { getFilteredMessages } from '../../selectors';

const mapStateToProps = (state) => {
  const props = {
    messages: getFilteredMessages(state),
  };
  return props;
};

const MessagesListContainer = (props) => {
  const { messages } = props;
  return <MessagesList messages={messages} />;
};

export default connect(mapStateToProps)(MessagesListContainer);
