import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import cn from 'classnames';

const SendMessageForm = (props) => {
  const { initialValues, onSubmit, inputBodyRef } = props;

  useEffect(() => {
    inputBodyRef.current.focus();
  });

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
            ref={inputBodyRef}
          />
          <button aria-label="submit" type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>Submit</button>
          <div className="d-block invalid-feedback">{formik.errors.body}</div>
        </div>
      </div>
    </form>
  );
};

export default SendMessageForm;
