import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { closeModal } from '../../slices/modalSlice';
import routes from '../../routes';
import AddChannelModal from './AddChannelModal';

const mapStateToProps = (state) => {
  const { modal: { isOpened } } = state;
  return { isOpened };
};

const actionCreators = {
  handleClose: closeModal,
};

const AddChannelModalContainer = (props) => {
  const { handleClose, isOpened } = props;

  const inputNameRef = useRef(null);

  const initialValues = {
    name: '',
  };

  const channelsPath = routes.channelsPath();

  const onSubmit = async (values, { resetForm, setSubmitting, setErrors }) => {
    try {
      setSubmitting(true);
      const data = {
        attributes: {
          ...values,
          removable: true,
        },
      };
      await axios.post(channelsPath, { data });
      resetForm({});
      handleClose();
    } catch (e) {
      setErrors({ name: 'Network Error' });
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  useEffect(() => {
    inputNameRef.current.focus();
  });

  return (
    <AddChannelModal
      handleSubmit={formik.handleSubmit}
      handleChange={formik.handleChange}
      values={formik.values}
      errors={formik.errors}
      isSubmitting={formik.isSubmitting}
      isValid={formik.isValid}
      inputNameRef={inputNameRef}
      isOpened={isOpened}
      handleClose={handleClose}
    />
  );
};

export default connect(mapStateToProps, actionCreators)(AddChannelModalContainer);
