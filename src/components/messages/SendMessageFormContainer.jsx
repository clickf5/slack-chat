import React, { useContext, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useFormik } from 'formik';
import AuthContext from '../../contexts/AuthContext';
import routes from '../../routes';
import SendMessageForm from './SendMessageForm';

const mapStateToProps = (state) => {
  const { channelsInfo: { currentChannelId } } = state;
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

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  useEffect(() => {
    inputBodyRef.current.focus();
  });

  return (
    <SendMessageForm
      handleSubmit={formik.handleSubmit}
      handleChange={formik.handleChange}
      values={formik.values}
      errors={formik.errors}
      isSubmitting={formik.isSubmitting}
      isValid={formik.isValid}
      inputBodyRef={inputBodyRef}
    />
  );
};

export default connect(mapStateToProps)(SendMessageFormContainer);
