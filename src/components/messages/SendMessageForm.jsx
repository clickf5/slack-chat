import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { addMessage } from '../../slices/messagesSlice';
import AuthContext from '../../contexts/AuthContext.js';

const mapStateToProps = (state) => {
  const { currentChannelId } = state;
  return { currentChannelId };
};

const mapActionToProps = {
  add: addMessage,
};

const SendMessageForm = (props) => {
  const { add, currentChannelId } = props;
  const { nickname } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      body: '',
    },
    onSubmit: (values) => {
      const message = { ...values, nickname, channelId: currentChannelId };
      // alert(JSON.stringify(message, null, 2));
      add(message);
    },
  });
  return (
    <form noValidate="" className="" onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <div className="input-group">
          <input
            name="body"
            aria-label="body"
            className="mr-2 form-control"
            value={formik.values.body}
            onChange={formik.handleChange}
          />
          <button aria-label="submit" type="submit" className="btn btn-primary">Submit</button>
          <div className="d-block invalid-feedback">&nbsp;</div>
        </div>
      </div>
    </form>
  );
};

export default connect(mapStateToProps, mapActionToProps)(SendMessageForm);
