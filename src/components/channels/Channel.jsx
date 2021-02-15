import React from 'react';
import {
  Button, ButtonGroup, Dropdown, Nav,
} from 'react-bootstrap';

const Channel = (props) => {
  const {
    id, name, isPrimary, handleClick, isRemovable, openRename,
  } = props;
  const variant = isPrimary ? 'primary' : 'light';

  if (isRemovable) {
    return (
      <Nav.Item>
        <Dropdown
          as={ButtonGroup}
          className="d-flex mb-2"
        >
          <Button
            variant={variant}
            onClick={handleClick}
            className="flex-grow-1 text-left nav-link"
          >
            {name}
          </Button>
          <Dropdown.Toggle
            split
            variant={variant}
            className="flex-grow-0"
          />
          <Dropdown.Menu>
            <Dropdown.Item>Remove</Dropdown.Item>
            <Dropdown.Item onClick={openRename}>Rename</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    );
  }

  return (
    <Nav.Item>
      <Button
        block
        variant={variant}
        onClick={handleClick}
        className="mb-2 text-left nav-link"
      >
        {name}
      </Button>
    </Nav.Item>
  );
};

export default Channel;
