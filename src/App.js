import './App.css';

import React from 'react';

import ContainerTask from './components/ContainerTask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Tarefas</h1>
      </header>
      <ContainerTask/>
    </div>
  );
}

export default App;

