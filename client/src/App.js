import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Store from './components/store/Store';
import Navbar from './components/customNavbar/CustomNavbar';
import Settings from './components/settings/Settings';
import Category from './components/category/Category';
import Item from './components/item/Item';
import Inventory from './components/inventory/Inventory';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Dashboard} />
            <Route path="/store" component={Store} />
            <Route path="/settings" component={Settings} />
            <Route path="/category" component={Category} />
            <Route path="/item" component={Item} />
            <Route path="/inventory" component={Inventory} />
          </div>
        </Router>
      // </Provider>
    );
  }
}

export default App;
