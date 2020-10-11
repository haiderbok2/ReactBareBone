import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './components/Signin';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav'



function App() {
  return (
    <Router>
    <div className="App">

        <Nav></Nav>
        <Switch>
          <Route exact path='/' component={Signin} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
