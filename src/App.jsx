import React from 'react';
import Channels from './components/channels/Channels.jsx';
import MessagesList from './components/messages/MessagesList.jsx';
import SendMessageForm from './components/messages/SendMessageForm.jsx';

const App = () => (
  <div className="row h-100 pb-3">
    <div className="col-3 border-right">
      <Channels />
    </div>
    <div className="col h-100">
      <div className="d-flex flex-column h-100">
        <div id="messages=box" className="chat-messages overflow-auto mb-3">
          <MessagesList />
        </div>
        <div className="mt-auto">
          <SendMessageForm />
        </div>
      </div>
    </div>
  </div>
);

export default App;
