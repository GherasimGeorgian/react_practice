import logo from './logo.svg';
import './App.css';
import Welcome from './Component/AppX'
import Ninjas from './Component/Ninjas';
import NinjasList from './Component/NinjasList'
import AddNinja from './Component/AddNinja';
import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter,Route } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
class App extends Component {
 
  
  render(){
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
      </div>
    </BrowserRouter>
  );
 }
}

export default App;
