import React, { Component } from 'react';
import './App.css';

import Tarefas from "./componentes/Tarefas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tarefas titulo="To-Do List com React"/>
      </div>
    );
  }
}

export default App;
