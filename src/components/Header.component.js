import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render() {
        return(
            <div className='mb-3'>
                {/* Navbar */}
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='../../../assets/images/logo.png' height="30" width="41" alt='Tastee Bite' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/home" className="nav-link"><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/about" className="nav-link"><span className="fa fa-info fa-lg"></span> About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/menu" className="nav-link"><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                {/* Login Modal */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                      {/* Login Form Handling */}
                      <Form onSubmit={this.handleLogin}>
                              <FormGroup>
                                  <Label htmlFor="username">Username</Label>
                                  <Input type="text" id="username" name="username"
                                      innerRef={(input) => this.username = input} />
                              </FormGroup>
                              <FormGroup>
                                  <Label htmlFor="password">Password</Label>
                                  <Input type="password" id="password" name="password"
                                      innerRef={(input) => this.password = input}  />
                              </FormGroup>
                              <FormGroup check>
                                  <Label check>
                                      <Input type="checkbox" name="remember"
                                      innerRef={(input) => this.remember = input}  />
                                      Remember me
                                  </Label>
                              </FormGroup>
                              <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                {/* Jumbotron */}

            </div>
        );
    }
}

export default Header;
