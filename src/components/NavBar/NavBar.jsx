import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {};

export const NavBar = ({
  classes,
  toggleMenu,
  closeMenu,
  isMenuOpened,
}) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="Menu"
        onClick={toggleMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu open={isMenuOpened}>
        <MenuItem onClick={closeMenu}>Profile</MenuItem>
        <MenuItem onClick={closeMenu}>My account</MenuItem>
        <MenuItem onClick={closeMenu}>Logout</MenuItem>
      </Menu>
      <Typography variant="h6" color="inherit">
        I am a header!
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(NavBar);
