import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import Menu from './pages/Menu';
import Main from './components/Main';
import { DISHES } from './shared/dishes';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main/>
          </div>
        </BrowserRouter>
    </Provider>
    );
  }
}


export default App;
