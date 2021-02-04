import React from 'react';
import cn from 'classnames';

const Channel = (props) => {
  const {
    id, name, isPrimary, handleClick,
  } = props;
  const buttonClass = cn('nav-link', 'btn-block', 'mb-2', 'text-left', 'btn', {
    'btn-primary': isPrimary,
  });
  return (
    <li className="nav-item">
      <button
        type="button"
        className={buttonClass}
        onClick={() => handleClick({ id })}
      >
        {name}
      </button>
    </li>
  );
};

export default Channel;
