import React from 'react';
import Home from './pages/Home';
import NotFoundPage from './pages/404';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Leistung1 from './pages/Leistung1';
import Leistung2 from './pages/Leistung2';
import Leistung3 from './pages/Leistung3';
import Leistung4 from './pages/Leistung4';
import Informationen from './pages/Informationen';

import {BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/aboutMe" component={AboutMe} />
        <Route exact path="/leistung1" component={Leistung1} />
        <Route exact path="/leistung2" component={Leistung2} />
        <Route exact path="/leistung3" component={Leistung3} />
        <Route exact path="/leistung4" component={Leistung4} />
        <Route exact path="/informationen" component={Informationen} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
