import React from 'react';

const MessagesList = (props) => {
  const { messages } = props;
  return (
    <>
      {messages.map((message) => (
        <div className="text-break" key={message.id}>
          <b>{message.nickname}</b>
          :
          {' '}
          {message.body}
        </div>
      ))}
    </>
  );
};

export default MessagesList;
