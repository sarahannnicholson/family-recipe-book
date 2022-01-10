import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'gatsby';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        href='/'
        LinkComponent={Link}
        title='home'
      >
        <HomeIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
)

export default Navbar;
