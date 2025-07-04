import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Router,Route} from 'react-router-dom';
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero';
function App() {
  return(
    <BrowserRouter>
      <div>
        <NavBar></NavBar>
        <Hero></Hero>
      </div>
    </BrowserRouter>
  )
}

export default App
