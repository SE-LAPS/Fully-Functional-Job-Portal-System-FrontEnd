import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Job Portal
        </Typography>
        <Button color="inherit" component={Link} to="/">Login</Button>
        <Button color="inherit" component={Link} to="/register">Register</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;