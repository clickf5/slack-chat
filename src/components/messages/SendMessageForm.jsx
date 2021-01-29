import React, { useContext, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import axios from 'axios';
import cn from 'classnames';
import * as actions from '../../slices/messagesSlice';
import AuthContext from '../../contexts/AuthContext';
import routes from '../../routes';

const mapStateToProps = (state) => {
  const { currentChannelId } = state;

  return {
    currentChannelId,
  };
};

const actionCreators = {
  addMessage: actions.addMessage,
};

const SendMessageForm = (props) => {
  const { currentChannelId, addMessage } = props;
  const channelMessagesPath = routes.channelMessagesPath(currentChannelId);
  const { nickname } = useContext(AuthContext);

  const inputBody = useRef(null);
  useEffect(() => {
    inputBody.current.focus();
  });

  const initialValues = {
    body: '',
  };

  const onSubmit = async (values, { resetForm, setSubmitting, setErrors }) => {
    try {
      setSubmitting(true);
      const message = { ...values, nickname, channelId: currentChannelId };
      const data = { attributes: message };
      await axios.post(channelMessagesPath, { data });
      addMessage(message);
      resetForm({});
      inputBody.current.focus();
    } catch (e) {
      setErrors({ body: 'Network Error' });
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const inputBodyClass = cn(
    'mr-2',
    'form-control',
    { 'is-invalid': !formik.isValid },
  );

  return (
    <form noValidate="" className="" onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <div className="input-group">
          <input
            name="body"
            aria-label="body"
            className={inputBodyClass}
            value={formik.values.body}
            onChange={formik.handleChange}
            ref={inputBody}
          />
          <button aria-label="submit" type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>Submit</button>
          <div className="d-block invalid-feedback">{formik.errors.body}</div>
        </div>
      </div>
    </form>
  );
};

export default connect(mapStateToProps, actionCreators)(SendMessageForm);
