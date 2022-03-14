import './global.css';
import 'react-toastify/dist/ReactToastify.min.css';

import React from 'react';
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer/>
    </div>
  );
}

export default App;

