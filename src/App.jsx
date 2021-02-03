import React from 'react';
import Channels from './components/channels/Channels';
import MessagesListContaier from './components/messages/MessagesListContainer';
import SendMessageFormContainer from './components/messages/SendMessageFormContainer';

const App = () => (
  <div className="row h-100 pb-3">
    <div className="col-3 border-right">
      <div className="d-flex mb-2">
        <span>Channels</span>
        <button type="button" className="ml-auto p-0 btn btn-link">+</button>
      </div>
      <Channels />
    </div>
    <div className="col h-100">
      <div className="d-flex flex-column h-100">
        <div id="messages=box" className="chat-messages overflow-auto mb-3">
          <MessagesListContaier />
        </div>
        <div className="mt-auto">
          <SendMessageFormContainer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
