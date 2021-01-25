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
      <div className="col h-100">
        <div className="d-flex flex-column h-100">
          <div id="messages=box" className="chat-messages overflow-auto mb-3">
            <div className="text-break">
              <b>Jolie_DAmore71</b>
              : fsdfgsdfg
            </div>
          </div>
          <div className="mt-auto">
            <form noValidate="" className="">
              <div className="form-group">
                <div className="input-group">
                  <input name="body" aria-label="body" className="mr-2 form-control" value="" />
                  <button aria-label="submit" type="submit" className="btn btn-primary">Submit</button>
                  <div className="d-block invalid-feedback">&nbsp;</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(App);
