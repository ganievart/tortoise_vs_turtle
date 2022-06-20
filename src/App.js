import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tortoise vs Turtle</h1>
        <img src="https://live.staticflickr.com/65535/48825675382_94fe8efdb1_m.jpg" className="App-logo"/> 
        <Counter />
      </header>
    </div>
  );
}

export default App;
