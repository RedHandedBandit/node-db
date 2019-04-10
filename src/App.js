import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inventory from './components/Inventory'
import YourList from './components/YourList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Inventory />
        <YourList />
      </div>
    );
  }
}

export default App;
