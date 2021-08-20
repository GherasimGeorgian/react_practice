
import './App.css';
import Welcome from './Component/AppX'
import Ninjas from './Component/Ninjas';
import NinjasList from './Component/NinjasList'
import AddNinja from './Component/AddNinja';
import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Post from './Component/Post';

class App extends Component {
 
  
  render(){
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/:post_id' component={Post} />
        </Switch>
        </div>
    </BrowserRouter>
  );
 }
}

export default App;
