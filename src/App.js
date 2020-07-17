import React from 'react';
import Home from './pages/Home';
import NotFoundPage from './pages/404';
import Services from './pages/Services';
import Contact from './pages/Contact';

import {BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
