import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
//import { useUserContext } from '../Context/UserContext';
import '../App.css';

export default function ButtonAppBar() {
  //const {currentUser}=useUserContext()
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
            <NavLink id="link" to="/mens">mens.</NavLink>
            <NavLink id="link" to="/womens">womens.</NavLink>
            <NavLink id="link" to="/boys">boys.</NavLink>
            <NavLink id="link" to="/girls">girls.</NavLink>
            <NavLink id="link" to="/blog">blog.</NavLink>
            <NavLink id="link" to="/login">login.</NavLink>
          </Typography>   
        </Toolbar>
      </AppBar>
    </Box>
  );
}