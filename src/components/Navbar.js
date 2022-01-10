import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Tooltip title="home">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
          href='/'
        >
          <HomeIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  </AppBar>
)

export default Navbar;
