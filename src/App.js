import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';

import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/Signup';
import Signin from './components/pages/Signin';
import wedding from './components/pages/wedding';
import birthday from './components/pages/birthday';
import travel from './components/pages/travel';
import corporate from './components/pages/corporate';


function App() {
  return (
  
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
       
        <Route path='/contact-us' component={ContactUs} />
        
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={Signin} />
        <Route path='/wedding' component={wedding}/>
        <Route path='/birthday' component={birthday}/>
        <Route path='/travel' component={travel}/>
        <Route path='/corporate' component={corporate}/>
       
      </Switch>
    </Router>
    
  );
}

export default App;
