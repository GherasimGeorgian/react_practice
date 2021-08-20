
import './App.css';
import Welcome from './Component/AppX'
import Ninjas from './Component/Ninjas';
import NinjasList from './Component/NinjasList'
import AddNinja from './Component/AddNinja';
import React, { Component } from 'react';
import Navbar from './Component/layout/Navbar';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Post from './Component/Post';
import Dashboard from './Component/dashboard/Dashboard'
import { ProjectDetails } from './Component/projects/ProjectDetails';
import {SignIn} from './Component/auth/SignIn'
import {SignUp} from './Component/auth/SignUp'
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
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route exact path='/:post_id' component={Post} />
          <Route exact path='/project/:id' component={ProjectDetails} />
         
       
        </Switch>
        </div>
    </BrowserRouter>
  );
 }
}

export default App;
