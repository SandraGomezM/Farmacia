import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/Info'
import Home from './components/Home'
import Products from './components/Products'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className="navbar">
      
      <ul className="titulo">
        <li>-Home</li>
        <li>-Products</li>
        <li>-Info</li>
      </ul>
      <Info/>
      <Home/>
      <Products/>
      <Contact />
      </div>
    )
  }
}

export default App;
