// Wow! This is something you can do with webpack!
// As long as we have the style-loader plugin (and a few other tools),
// we can import scss and webpack will build it out into css!
// Don't worry too much about how this happens for now - but you can feel
// free to write any scss you want now!
import './index.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { default as Main } from './components/Main';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('app')
);
