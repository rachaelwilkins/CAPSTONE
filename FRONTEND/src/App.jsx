import React from 'react'
import './App.css'
import HomePage from './Pages/Home'
import { Route, Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/Login';
import BoysSneakers from './Pages/Boys';

function App() {

  return (
    <>
      <BoysSneakers/>
    </>
  )
}

export default App
