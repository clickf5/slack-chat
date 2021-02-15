import React from 'react';
import { connect } from 'react-redux';
import { Nav } from 'react-bootstrap';
import { setCurrentChannelId } from '../../slices/channelsInfoSlice';
import { openModal } from '../../slices/modalSlice';
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
  handleOpen: openModal,
};

const renderChannels = (channels, currentChannelId, handleClick, handleOpen) => channels
  .map((channel) => {
    const { id, name, removable } = channel;
    const isPrimary = (id === currentChannelId);
    const openRename = () => handleOpen({ type: 'renameChannel', extra: { channelId: id } });
    const openRemove = () => handleOpen({ type: 'removeChannel', extra: { channelId: id } });
    return (
      <Channel
        key={id}
        name={name}
        isPrimary={isPrimary}
        isRemovable={removable}
        handleClick={() => handleClick({ id })}
        openRename={openRename}
        openRemove={openRemove}
      />
    );
  });

const ChannelsList = (props) => {
  const {
    channels, currentChannelId, handleClick, handleOpen,
  } = props;
  return (
    <Nav variant="pills" className="flex-column" fill>
      {renderChannels(channels, currentChannelId, handleClick, handleOpen)}
    </Nav>
  );
};

export default connect(mapStateToProps, actionCreators)(ChannelsList);
