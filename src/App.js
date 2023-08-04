import React from 'react';
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import GeneratePolls from './components/GeneratePolls';
import PollList from './components/PollList';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    
    <div id='App' className="  w-full bg-gradient-to-b from-black via-black to-gray-800 " >
      <NavBar/>
      
    
      <Routes>
    <Route path="/" elememt={<Home/>} />
      <Route exact path="/generatepolls" element={<GeneratePolls/>} />
      <Route path="/polllist" element={<PollList/>} />
      </Routes>
    
    
   
    
  </div>
        
    
  );
}

export default App;
