import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css';
import Favicon from '../Favicons/favicon.ico'
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useUserContext } from '../Context/SneakerContext';

export default function ButtonAppBar() {
const{user, setUser} = useUserContext()
const navigate=useNavigate()
  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor: 'transparent', zIndex: 5,}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
          <img id="favicon" src={Favicon}/>  
          </IconButton>
          {/* <Typography variant="h6" color="black" noWrap id="toolItems"> */}
            <NavLink id="link" to="/men">men.</NavLink>
            <NavLink id="link" to="/women">women.</NavLink>
            <NavLink id="link" to="/boys">boys.</NavLink>
            <NavLink id="link" to="/girls">girls.</NavLink>
            <NavLink id="link" to="/about">about.</NavLink>
            <div id='icons'>
            <NavLink id="link" to="/wishlist"><FaHeart/></NavLink>
            <NavLink id="link" to="/cart"><FaCartShopping/></NavLink>   
            <NavLink id="link" to="/login"><IoPerson/></NavLink>
            <NavLink id="link" to="/profile">{user?.email}</NavLink>
            {/* <p id="link">{user?.email}</p>         */}
            </div>
          {/* </Typography>    */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}