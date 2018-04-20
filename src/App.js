import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Stock from './components/Stock'
import Stats from './components/Stats'

export default () => (
  <BrowserRouter>
    <div>
      <Header />

      <Route exact path="/" component={Home}/>
      <Route path="/stock" component={Stock}/>
      <Route path="/stats" component={Stats}/>
    </div>
  </BrowserRouter>
)
