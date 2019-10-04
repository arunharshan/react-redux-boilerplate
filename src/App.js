import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './App.scss';
import { Router, Route, Switch } from 'react-router-dom';
import history from './RouterExtend';
import PrivateRoute from './RouterExtend/PrivateRouter';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header history={history} />
        <div className='body-container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Route exact path='/login' component={Login} />
            <Route exact path='' component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
