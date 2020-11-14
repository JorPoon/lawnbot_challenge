import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomeView from './components/views/HomeView'
import './App.css';


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <HomeView/>
          </Route>
        </Switch>
    </BrowserRouter>
  )
  ;
}

export default App;
