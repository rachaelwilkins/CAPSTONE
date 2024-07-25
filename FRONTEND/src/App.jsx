import React from 'react'
import './App.css'
import HomePage from './Pages/Home'
import { Route, Routes } from 'react-router-dom';
import ButtonAppBar from './Components/NavBar';
import AppRoutes from './Routes/Routes';

function App() {

  return (
    <>
      <ButtonAppBar/>
      <AppRoutes/>
    </>
  )
}

export default App
