import { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { NAVLINKS } from '../../Content';
import '../../App.css';
import './Header.css';

const Header = () => {

    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    }

    const navMapping = NAVLINKS.map(link => {
        return (
            <NavItem key={link.id}>
                <NavLink activeClassName="navactive" className={`nav-link navstyle ${link.planet}`} to={`/${link.planet}`}>{link.title}</NavLink>
            </NavItem>
        );
    });

    return (
        <Navbar className="bottom-border" sticky="top" expand="md">
            <div className="row">
                <div className="col-3 col-md-12 col-lg-2 logo justify-content-md-center justify-content-lg-start">
                    <NavbarBrand href="/mercury">
                        THE PLANETS
                    </NavbarBrand>
                </div>
                <span onClick={toggleNav} className={`${isNavOpen ? 'hamburger-active' : 'hamburger'} col-1 my-auto d-md-none`}></span>
                <div className="col-md-12 col-lg-8 col-xl-6 d-md-block d-none">
                    <Nav>
                        {navMapping}
                    </Nav>
                </div>
                {/* <div className="d-md-none">
                    <h1>Test</h1>
                </div> */}
            </div>  
        </Navbar>
    )
}

export default Header
