import React, { Component } from 'react';
import Navi from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
    <BrowserRouter>
      
        <Navi />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
    </BrowserRouter>
  );  
  }
}


export default App;

