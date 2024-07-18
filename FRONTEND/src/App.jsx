import React from 'react'
import './App.css'
import AppRoutes from './Routes/Routes'
import ButtonAppBar from './Components/NavBar'
import BoysSneakers from './Pages/Boys'

function App() {

  return (
    <>
      <h1>whitesneakerhub.</h1>
      <AppRoutes/>
      <ButtonAppBar/>
      <BoysSneakers/> 
    </>
  )
}

export default App
