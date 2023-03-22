import React from 'react'
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import Posts from './components/Posts/Index'
import './App.css';



function App() {

  return (
    <div className="App">
      <Header/>
      <SubHeader/>
      <Posts />
    </div>
  );
}

export default App;
