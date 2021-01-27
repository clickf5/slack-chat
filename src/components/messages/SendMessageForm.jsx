import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { addMessage } from '../../slices/messagesSlice';
import AuthContext from '../../contexts/AuthContext';

const SendMessageForm = () => {
  const { nickname } = useContext(AuthContext);

  const dispatch = useDispatch();

  const currentChannelId = useSelector((state) => state.currentChannelId);

  const initialValues = {
    body: '',
  };

  const onSubmit = (values, { resetForm }) => {
    const message = { ...values, nickname, channelId: currentChannelId };
    dispatch(addMessage(message));
    resetForm({});
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
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

export default SendMessageForm;
