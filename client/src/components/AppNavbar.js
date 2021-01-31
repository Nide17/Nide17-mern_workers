import React, { Component } from 'react';
import Logo from './logosvg.svg';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {

    //Initial state of the toggler
    state = {
        isOpen: false
    }

    //Function to change the state, if true becomes false vice versa
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    // render the Navbar using all these components imported
    render() {

        return (

            <div>
                <Navbar style={{backgroundColor: "#a3c2c2"}} light expand="lg" className="mb-5">

                    <Container>
                        <NavbarBrand href="/" style={{fontSize:"2vw", fontWeight:"bolder"}}>
                        <img src={Logo} id="img-logo" className="d-inline-block font-weight-bold align-right" alt="" />
                         Workers </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                    </Container>

                    <Collapse isOpen={this.state.isOpen} navbar>

                        <Nav className="ml-auto" navbar style={{fontSize:"large", fontWeight:"bolder"}}>
                            <NavItem>
                                <NavLink href="/">
                                    Home
                            </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/">
                                    About
                            </NavLink>
                            </NavItem>

                            {/* <NavItem>
                                <NavLink href="/">
                                    Login
                            </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/">
                                    Signup
                            </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/">
                                    Upload
                            </NavLink>
                            </NavItem> */}

                        </Nav>

                    </Collapse>

                </Navbar>

            </div>
        );

    }
}

export default AppNavbar
