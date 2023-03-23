import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import Posts from './components/Posts'
import Usuarios from './components/Usuarios'
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
