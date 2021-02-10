import React from 'react';
import ChannelsList from './components/channels/ChannelsList';
import MessagesListContaier from './components/messages/MessagesListContainer';
import SendMessageFormContainer from './components/messages/SendMessageFormContainer';
import Modal from './components/modals/Modal';
import AddChannelButton from './components/channels/AddChannelButton';

const App = () => (
  <>
    <div className="row h-100 pb-3">
      <div className="col-3 border-right">
        <div className="d-flex mb-2">
          <span>Channels</span>
          <AddChannelButton />
        </div>
        <ChannelsList />
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
    <Modal />
  </>
);

export default App;
