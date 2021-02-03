import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

const mapStateToProps = (state) => {
  const { channels, currentChannelId } = state;
  const props = {
    channels,
    currentChannelId,
  };
  return props;
};

const renderChannels = (channels, currentChannelId) => channels.map((channel) => {
  const { id, name } = channel;
  const isPrimary = (id === currentChannelId);
  const buttonClass = cn('nav-link', 'btn-block', 'mb-2', 'text-left', 'btn', {
    'btn-primary': isPrimary,
  });
  return (
    <li className="nav-item" key={id}>
      <button type="button" className={buttonClass}>{name}</button>
    </li>
  );
});

const Channels = (props) => {
  const { channels, currentChannelId } = props;
  const renderedChannels = renderChannels(channels, currentChannelId);
  return (
    <>
      <ul className="nav flex-column nav-pills nav-fill">
        {renderedChannels}
      </ul>
    </>
  );
};

export default connect(mapStateToProps)(Channels);
