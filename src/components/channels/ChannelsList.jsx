import React from 'react';
import { connect } from 'react-redux';
import { setCurrentChannelId } from '../../slices/currentChannelIdSlice';
import Channel from './Channel';

const mapStateToProps = (state) => {
  const { channels, currentChannelId } = state;
  const props = {
    channels,
    currentChannelId,
  };
  return props;
};

const actionCreators = {
  handleClick: setCurrentChannelId,
};

const renderChannels = (channels, currentChannelId, handleClick) => channels.map((channel) => {
  const { id, name } = channel;
  const isPrimary = (id === currentChannelId);
  return (
    <Channel
      key={id}
      id={id}
      name={name}
      isPrimary={isPrimary}
      handleClick={handleClick}
    />
  );
});

const ChannelsList = (props) => {
  const { channels, currentChannelId, handleClick } = props;
  return (
    <>
      <ul className="nav flex-column nav-pills nav-fill">
        {renderChannels(channels, currentChannelId, handleClick)}
      </ul>
    </>
  );
};

export default connect(mapStateToProps, actionCreators)(ChannelsList);
