import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Timer } from './Components/Timer';
import { Header } from './Components/Header/Header';

function App() {
  return (
    <div className="h-screen bg-red-100">
      <Header/>
      <Timer/>
      
    </div>
  );
}

export default App;
