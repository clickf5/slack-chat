import React from 'react';
import { connect } from 'react-redux';
import { Nav } from 'react-bootstrap';
import { setCurrentChannelId } from '../../slices/channelsInfoSlice';
import Channel from './Channel';

const mapStateToProps = (state) => {
  const { channelsInfo: { channels, currentChannelId } } = state;
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
  const { id, name, removable } = channel;
  const isPrimary = (id === currentChannelId);
  return (
    <Channel
      key={id}
      id={id}
      name={name}
      isPrimary={isPrimary}
      isRemovable={removable}
      handleClick={handleClick}
    />
  );
});

const ChannelsList = (props) => {
  const { channels, currentChannelId, handleClick } = props;
  return (
    <Nav variant="pills" className="flex-column" fill>
      {renderChannels(channels, currentChannelId, handleClick)}
    </Nav>
  );
};

export default connect(mapStateToProps, actionCreators)(ChannelsList);
