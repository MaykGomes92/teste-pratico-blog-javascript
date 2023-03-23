import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import Posts from './components/Posts'
import Usuarios from './components/Usuarios'
import UsuarioSelecionado from './components/Usuarios/UsuarioSelecionado'
import './App.css';



function App() {

  return (
    <>
      <Header />
      <SubHeader/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route element={<Usuarios />} path="/usuario" />
          <Route element={<UsuarioSelecionado />} path="user/:id" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
