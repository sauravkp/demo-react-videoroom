import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminComponent from './components/AdminComponent';
import UserComponent from './components/UserComponent';
import LandingComponent from './components/LandingComponent';
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
       
      <Switch>
                <Route path="/" component={LandingComponent} exact />
               <Route path="/admin" component={AdminComponent} exact />
               <Route path="/user" component={UserComponent} exact />
      </Switch>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
