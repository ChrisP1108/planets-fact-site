import { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, 
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../../App.css';
import './Header.css'

const Header = () => {

    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    }

    return (
        <Navbar className='bottom-border' sticky='top' expand='md'>
            <div className="container">
                <NavbarBrand href="/">
                    THE PLANETS
                </NavbarBrand>
                <NavbarToggler onClick={toggleNav} className="mr-2" />
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav navbar className="mx-auto">
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle mercury" to="/mercury">MERCURY</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle ml-md-2 ml-xl-5" to="/venus">VENUS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle ml-md-2 ml-xl-5" to="/earth">EARTH</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle ml-md-2 ml-xl-5" to="/mars">MARS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle ml-md-2 ml-xl-5" to="/jupiter">JUPITER</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle ml-md-2 ml-xl-5" to="/saturn">SATURN</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle ml-md-2 ml-xl-5" to="/uranus">URANUS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle ml-md-2 ml-xl-5" to="/neptune">NEPTUNE</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    )
}

export default Header
