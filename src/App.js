import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu';
import { MENUITEMS } from './shared/menuItems';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuitems: MENUITEMS
    };
  }
  render() {
    return (
      <div className="App">
        <><Navbar>
          <div className="container">
            <NavbarBrand href="/"></NavbarBrand>
          </div>
        </Navbar><div className="container">
            <Menu dishes={this.state.menuitems} />
          </div></>
      </div>
    );
  }
}

export default App;
