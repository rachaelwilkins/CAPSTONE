import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import SneakerDetails from '../Pages/SneakerDetails';
import MensSneakers from '../Pages/Men';
import WomensSneakers from '../Pages/Women';
import BoysSneakers from '../Pages/Boys'
import GirlsSneakers from '../Pages/Girls'
import Blog from '../Pages/Blog'
import LogInPage from '../Pages/LoginSignUp';
import CartPage from '../Pages/Cart'

export const AppRoutes = (props) => {
  return (

    <Routes>
      <Route exact path="/sneakers/:id/" element={<SneakerDetails {...props} />} />
      <Route exact path="/men" element={<MensSneakers {...props} />} />
      <Route exact path="/women" element={<WomensSneakers {...props} />} />
      <Route exact path="/boys" element={<BoysSneakers {...props} />} />
      <Route exact path="/girls" element={<GirlsSneakers {...props} />} />
      <Route exact path="/blog" element={<Blog {...props} />} />
      <Route exact path="/login" element={<LogInPage {...props} />} />
      <Route exact path="/cart" element={<CartPage {...props} />} />
    </Routes>
  )
}

export default AppRoutes;