import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import BaseLayout from './components/BaseLayout';
import Contact from './components/Contact';
import References from './components/References';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/references' component={References}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
