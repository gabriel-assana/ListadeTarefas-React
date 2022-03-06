import './global.css';

import React from 'react';

import logo from '../src/assets/icons-task.png';
import InputCard from './components/InputCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <img src={logo} alt="Task Cards"></img>
         <h1>Task Cards</h1>
      </header>
      <InputCard/>
    </div>
  );
}

export default App;

