import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';

export const Header = ({ mediaTypes, selectedMedia, onMediaChange }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="#home">iTunes Viewer</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="ml-auto"
          onSelect={selected => onMediaChange(selected)}
          activeKey={selectedMedia}
        >
          {mediaTypes.map((type, index) => (
            <Nav.Link
              key={index}
              eventKey={type.value}
              data-test-id={`menu-${type.value}`}
            >
              {type.label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  mediaTypes: PropTypes.arrayOf(PropTypes.object),
  onMediaChange: PropTypes.func,
  selectedMedia: PropTypes.string
};
