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

const App = (props) => {
  const { channels, currentChannelId } = props;
  const renderedChannels = renderChannels(channels, currentChannelId);
  return (
    <div className="row h-100 pb-3">
      <div className="col-3 border-right">
        <div className="d-flex mb-2">
          <span>Channels</span>
          <button type="button" className="ml-auto p-0 btn btn-link">+</button>
        </div>
        <ul className="nav flex-column nav-pills nav-fill">
          {renderedChannels}
        </ul>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(App);
