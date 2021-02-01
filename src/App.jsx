import React from 'react';
import Channels from './components/channels/Channels';
import MessagesListContaier from './components/messages/MessagesListContainer';
import SendMessageForm from './components/messages/SendMessageForm';

const App = () => (
  <div className="row h-100 pb-3">
    <div className="col-3 border-right">
      <Channels />
    </div>
    <div className="col h-100">
      <div className="d-flex flex-column h-100">
        <div id="messages=box" className="chat-messages overflow-auto mb-3">
          <MessagesListContaier />
        </div>
        <div className="mt-auto">
          <SendMessageForm />
        </div>
      </div>
    </div>
  </div>
);

export default App;
