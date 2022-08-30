import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar>
        <div className="container">
            <NavbarBrand href="/"></NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
