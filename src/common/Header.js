import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Tabs, Tab} from 'material-ui/Tabs';


const Header = () => {
  return (
    <Toolbar style={{
        backgroundColor:'none'}
      }>
      <ToolbarGroup firstChild={true}>
        <h1 className="logo">Find a Fourth</h1>
      </ToolbarGroup>
      <ToolbarGroup>
        <Link to="/about"><RaisedButton label="About" primary={true}/></Link>

      </ToolbarGroup>
      </Toolbar>

  );
}

export default Header;

// <RaisedButton
//   label="Sign In"
//   containerElement={<Link to="/about" />}
// />
// <RaisedButton label="Create Account"/>
