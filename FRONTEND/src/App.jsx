import React from 'react'
import './App.css'
import HomePage from './Pages/Home'
import { Route, Routes } from 'react-router-dom';
import ButtonAppBar from './Components/NavBar';
import AppRoutes from './Routes/Routes';
import Footer from './Pages/Footer';

function App() {

  return (
    <>
      <ButtonAppBar/>
      <AppRoutes/>
      <Footer/>
    </>
  )
}

export default App
