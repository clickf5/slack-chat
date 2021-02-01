import React from 'react';
import { connect } from 'react-redux';
import MessagesList from './MessagesList';

const mapStateToProps = (state) => {
  const { messages, currentChannelId } = state;
  const filteredMessages = messages.filter((message) => (message.channelId === currentChannelId));
  const props = {
    messages: filteredMessages,
  };
  return props;
};

const MessagesListContainer = (props) => {
  const { messages } = props;
  return <MessagesList messages={messages} />;
};

export default connect(mapStateToProps)(MessagesListContainer);
