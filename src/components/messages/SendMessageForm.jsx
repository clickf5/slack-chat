import React from 'react';
import cn from 'classnames';

const SendMessageForm = (props) => {
  const {
    handleSubmit, handleChange, values, errors, isSubmitting, isValid, inputBodyRef,
  } = props;

  const inputBodyClass = cn(
    'mr-2',
    'form-control',
    { 'is-invalid': !isValid },
  );

  return (
    <form noValidate="" className="" onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="input-group">
          <input
            name="body"
            aria-label="body"
            className={inputBodyClass}
            value={values.body}
            onChange={handleChange}
            ref={inputBodyRef}
          />
          <button aria-label="submit" type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
          <div className="d-block invalid-feedback">{errors.body}</div>
        </div>
      </div>
    </form>
  );
};

export default SendMessageForm;
