import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div style={{height: "100vh", backgroundColor: "red"}}></div>
      <div style={{height: "100vh"}}></div>
    </>
  );
}

export default App;
