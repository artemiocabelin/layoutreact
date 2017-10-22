import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import Landing from './components/landing';
import Header from './components/header';
import Navigation from './components/navigation';
import Secondary from './components/secondary';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Header />
          <Navigation />
          <Switch>
              <Route path="/secondary" component={Secondary} />
              <Route path="/" component={Landing} />
          </Switch>
        </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
