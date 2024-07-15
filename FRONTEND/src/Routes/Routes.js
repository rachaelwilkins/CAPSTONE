import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import GameDetails from '../pages/GameDetails';
import Games from '../pages/Games';
import CartDetails from '../pages/CartDetails';
import SearchPage from '../pages/SearchPage';
import LoginSignUp from '../components/LoginSignUp';
import { Login } from '@mui/icons-material';

export const AppRoutes = (props) => {
  return (

    <Routes>
      <Route exact path='/sneakers/:id/' element={<SneakerDetails {...props} />} />
      <Route exact path='/men' element={<Men {...props} />} />
      <Route exact path="/women" element={<Women {...props} />} />
      <Route exact path="/boys" element={<Boys {...props} />} />
      <Route exact path="/girls" element={<Girls {...props} />} />
      <Route exact path="/login" element={<Login {...props} />} />
      <Route exact path='/cart' element={<CartDetails {...props} />} />
    </Routes>
  )
}