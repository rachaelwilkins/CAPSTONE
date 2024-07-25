import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import ButtonAppBar from './Components/NavBar';
import AppRoutes from './Routes/Routes';
import { UserProvider } from './Context/SneakerContext';
import Footer from './Pages/Footer';

function App() {

  return (
    <>
      <UserProvider>
      <ButtonAppBar/>
      <AppRoutes/>
      </UserProvider>
      <Footer/>
    </>
  )
}

export default App
