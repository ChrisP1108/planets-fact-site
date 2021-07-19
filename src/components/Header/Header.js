import { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, 
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import '../../App.css';
import './Header.css'

const Header = () => {

    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    }

    return (
        <Navbar className='bottom-border'>
            <div className="container">
                <NavbarBrand href="/">
                    THE PLANETS
                </NavbarBrand>
                <NavbarToggler onClick={toggleNav} className="mr-2" />
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav navbar className="ml-auto text-center">
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle" to="/home">HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle ml-md-2 ml-xl-5" to="/software">SOFTWARE</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle ml-md-2 ml-xl-5" to="/about">ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle ml-md-2 ml-xl-5" to="/contactus">CONTACT US</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    )
}

export default Header
