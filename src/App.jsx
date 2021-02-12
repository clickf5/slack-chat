import React from 'react';
import { connect } from 'react-redux';
import ChannelsList from './components/channels/ChannelsList';
import MessagesListContaier from './components/messages/MessagesListContainer';
import SendMessageFormContainer from './components/messages/SendMessageFormContainer';
import getModal from './components/modals';
import AddChannelButton from './components/channels/AddChannelButton';

const mapStateToProps = (state) => {
  const { modal } = state;
  return { modal };
};

const renderModal = (modalType, modalExtra) => {
  if (!modalType) {
    return null;
  }
  const Component = getModal(modalType);
  return <Component extra={modalExtra} />;
};

const App = (props) => {
  const { modal } = props;
  return (
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
      {renderModal(modal.type, modal.extra)}
    </>
  );
};

export default connect(mapStateToProps)(App);
