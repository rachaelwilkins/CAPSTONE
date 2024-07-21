import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import SneakerDetails from '../Pages/SneakerDetails';
import MensSneakers from '../Pages/Men';
import WomensSneakers from '../Pages/Women';
import BoysSneakers from '../Pages/Boys'
import GirlsSneakers from '../Pages/Girls'
import Blog from '../Pages/Blog'
import LogInPage from '../Pages/Login';
import CartPage from '../Pages/Cart'

function AppRoutes() {
  return (
    <div>
    <Routes>
      <Route exact path="/sneakers/:id/" element={<SneakerDetails/} />
      <Route exact path="/men" element={<MensSneakers/} />
      <Route exact path="/women" element={<WomensSneakers/} />
      <Route exact path="/boys" element={<BoysSneakers/} />
      <Route exact path="/girls" element={<GirlsSneakers/} />
      <Route exact path="/blog" element={<Blog/} />
      <Route exact path="/login" element={<LogInPage/} />
      <Route exact path="/cart" element={<CartPage/} />
    </Routes>
    </div>
  )
}

export default AppRoutes;