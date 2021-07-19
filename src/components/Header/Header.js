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
        <Navbar className="bottom-border" sticky="top" expand="md">
            <div className="row">
                <div className="col-md-12 col-lg-2 my-auto brand-align">
                    <NavbarBrand href="/" className="justify-content-md-center">
                        THE PLANETS
                    </NavbarBrand>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Nav>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle mercury" to="/mercury">MERCURY</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle venus" to="/venus">VENUS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle earth" to="/earth">EARTH</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle mars" to="/mars">MARS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle jupiter" to="/jupiter">JUPITER</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle saturn" to="/saturn">SATURN</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle uranus" to="/uranus">URANUS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle neptune" to="/neptune">NEPTUNE</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>  
        </Navbar>
    )
}

export default Header
