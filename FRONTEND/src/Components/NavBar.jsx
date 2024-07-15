import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function ButtonAppBar() {
  const {currentUser}=useUserContext()
  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'transparent'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap id="toolItems">
            <NavLink id="link" to="/men">Men</NavLink>
            <NavLink id="link" to="/women">Women</NavLink>
            <NavLink id="link" to="/boys">Boys</NavLink>
            <NavLink id="link" to="/girls">Girls</NavLink>
            <NavLink id="link" to="/about">About</NavLink>
            <NavLink id="link" to="/login">Login</NavLink>
          </Typography>   
        </Toolbar>
      </AppBar>
    </Box>
  );
}