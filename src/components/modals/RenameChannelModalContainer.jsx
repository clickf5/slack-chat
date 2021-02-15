import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { closeModal } from '../../slices/modalSlice';
import routes from '../../routes';
import ChannelModal from './ChannelModal';
import { getChannelInfo } from '../../selectors';

const mapStateToProps = (state) => {
  const { modal: { isOpened } } = state;
  const channelInfo = getChannelInfo(state);
  return { isOpened, channelInfo };
};

const actionCreators = {
  handleClose: closeModal,
};

const RenameChannelModalContainer = (props) => {
  const { handleClose, isOpened, channelInfo } = props;

  const inputNameRef = useRef(null);

  const initialValues = {
    name: channelInfo.name,
  };

  const channelPath = routes.channelPath(channelInfo.id);

  const onSubmit = async (values, { resetForm, setSubmitting, setErrors }) => {
    try {
      setSubmitting(true);
      const data = {
        attributes: {
          ...values,
        },
      };
      await axios.patch(channelPath, { data });
      resetForm({});
      handleClose();
    } catch (e) {
      setErrors({ name: 'Network Error' });
    }
  };

  const validationSchema = yup.object().shape({
    name: yup.string()
      .min(3, 'Must be 3 to 20 characters')
      .max(20, 'Must be 3 to 20 characters')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    inputNameRef.current.focus();
  });

  return (
    <ChannelModal
      title="Rename channel"
      handleSubmit={formik.handleSubmit}
      handleChange={formik.handleChange}
      values={formik.values}
      errors={formik.errors}
      isSubmitting={formik.isSubmitting}
      isValid={formik.isValid}
      inputNameRef={inputNameRef}
      isOpened={isOpened}
      handleClose={() => handleClose()}
    />
  );
};

export default connect(mapStateToProps, actionCreators)(RenameChannelModalContainer);
