import React, { useContext, useRef } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import AuthContext from '../../contexts/AuthContext';
import routes from '../../routes';
import SendMessageForm from './SendMessageForm';

const mapStateToProps = (state) => {
  const { currentChannelId } = state;
  return {
    currentChannelId,
  };
};

const SendMessageFormContainer = (props) => {
  const { currentChannelId } = props;
  const channelMessagesPath = routes.channelMessagesPath(currentChannelId);
  const { nickname } = useContext(AuthContext);

  const inputBodyRef = useRef(null);

  const initialValues = {
    body: '',
  };

  const onSubmit = async (values, { resetForm, setSubmitting, setErrors }) => {
    try {
      setSubmitting(true);
      const data = {
        attributes: {
          ...values,
          nickname,
          channelId: currentChannelId,
        },
      };
      await axios.post(channelMessagesPath, { data });
      resetForm({});
      inputBodyRef.current.focus();
    } catch (e) {
      setErrors({ body: 'Network Error' });
    }
  };

  return (
    <SendMessageForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      inputBodyRef={inputBodyRef}
    />
  );
};

export default connect(mapStateToProps)(SendMessageFormContainer);
