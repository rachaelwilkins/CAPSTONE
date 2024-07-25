import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import SneakerDetails from '../Pages/SneakerDetails';
import MensSneakers from '../Pages/Men';
import WomensSneakers from '../Pages/Women';
import BoysSneakers from '../Pages/Boys'
import GirlsSneakers from '../Pages/Girls'
import LogInPage from '../Pages/SignIn';
import Theme from '../Components/Theme/Theme';
import HomePage from '../Pages/Home';
import SignIn from '../Pages/SignIn';
import AboutPage from '../Pages/About';
import SignUp from '../Pages/SignUp';
import Checkout from '../Pages/Cart';

function AppRoutes() {
  return (
    <div>
    <Routes>
      <Route exact path="/sneakers/">
      <Route exact path=":id" element={<Theme><SneakerDetails/></Theme>} />
      </Route> 
      <Route exact path="/men" element={<MensSneakers/>} />
      <Route exact path="/women" element={<WomensSneakers/>} />
      <Route exact path="/boys" element={<BoysSneakers/>} />
      <Route exact path="/girls" element={<GirlsSneakers/>} />
      <Route exact path="/about" element={<Theme><AboutPage/></Theme>} />
      <Route exact path="/login" element={<Theme><LogInPage/></Theme>} />
      <Route exact path="/signup" element={<Theme><SignUp/></Theme>} />
      <Route exact path="/cart" element={<Theme><Checkout/></Theme>} />
      <Route exact index element={<Theme><HomePage/></Theme>} />
    </Routes>
    </div>
  )
}

export default AppRoutes;