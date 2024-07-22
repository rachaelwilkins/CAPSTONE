import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function ButtonAppBar() {
  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'black'}}>
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
            <NavLink id="link" to="/men">men.</NavLink>
            <NavLink id="link" to="/women">women.</NavLink>
            <NavLink id="link" to="/boys">boys.</NavLink>
            <NavLink id="link" to="/girls">girls.</NavLink>
            <NavLink id="link" to="/login">login.</NavLink>
          </Typography>   
        </Toolbar>
      </AppBar>
    </Box>
  );
}