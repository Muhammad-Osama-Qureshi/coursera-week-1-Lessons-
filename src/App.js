import React,{Component} from 'react';
import Menu from './components/MenuComponents'

import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="dark" margin="ml auto" justify="space-evenly">
          <div className="container">
            <NavbarBrand href="/">Bon Soir Eliot!! </NavbarBrand>
            </div>
        </Navbar>
        <Menu/>
      </div>
    );
  }
}
export default App;