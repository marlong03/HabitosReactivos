import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsuarioPage from './pages/UsuarioPage';

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsuarioPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
