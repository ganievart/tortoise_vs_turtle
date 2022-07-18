import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { ImageLoader } from './features/imageLoader/ImageLoader';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageLoader />
        <Counter />
      </header>
    </div>
  );
}

export default App;
