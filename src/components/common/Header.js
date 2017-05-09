import React from 'react';
import PropTypes from 'prop-types';
// import { Link, IndexLink } from 'react-router';

import Button from 'react-bootstrap/lib/Button';


const Header = () => {
  return (
    <div>
    <h1>Find a Fourth</h1>
      <Button href="/foo/bar">Foo</Button>
</div>
  );
}

export default Header;
