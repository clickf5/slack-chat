import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { messages, currentChannelId } = state;
  const filteredMessages = messages.filter((message) => (message.channelId === currentChannelId));
  const props = {
    messages: filteredMessages,
  };
  return props;
};

const MessagesList = (props) => {
  const { messages } = props;
  const renderedMessages = messages.map((message) => (
    <div className="text-break" key={message.id}>
      <b>{message.nickname}</b>
      :
      {' '}
      {message.body}
    </div>
  ));

  return (
    <>
      {renderedMessages}
    </>
  );
};

export default connect(mapStateToProps)(MessagesList);
