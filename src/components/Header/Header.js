import { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { NAVLINKS } from '../../Content';
import '../../App.css';
import './Header.css';

const Header = () => {

    const [isNavOpen, setNavOpen] = useState(false);
    const [clicked, setClick] = useState(false);

    const history = useHistory();

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
        setClick(clicked === false ? !clicked : clicked);
    }

    const mobileNavigate = link => {
        history.push(`/${link}`);
        setNavOpen(!isNavOpen);
    }

    const navMapping = NAVLINKS.map(link => {
        return (
            <NavItem key={link.id}>
                <NavLink activeClassName="navactive" className={`nav-link navstyle ${link.planet}`} to={`/${link.planet}`}>{link.title}</NavLink>
            </NavItem>
        );
    });

    const mobileMapping = NAVLINKS.map(link => {
        return (
            <div key={link.id} onClick={() => mobileNavigate(link.planet)}className={`${link.id !== NAVLINKS.length && 'mobile-border'} d-flex flex-row w-100 cursor`}>
                <span className={`mobile-${link.planet} circle my-auto`}></span>
                <p className="mobilestyle mobile-title-margin my-auto">
                    {link.title}
                </p>
                <span className="mobile-chevron my-auto"></span>
            </div>
        );
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            setNavOpen(isNavOpen === true ? !isNavOpen : isNavOpen);
            setClick(clicked === true ? !clicked : clicked);
        }
    })

    return (
        <>
            <Navbar className="header-bottom-border" sticky="top">
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
                </div>
            </Navbar>
            <div className="d-md-none">
                <Navbar>
                    <div className={`${isNavOpen && clicked ? 'mobile-trans-on' : clicked && 'mobile-trans-off'} mobile-margin mobile-background`}>
                        <Nav>
                            {mobileMapping}
                        </Nav>
                    </div>
                </Navbar>
            </div>  
        </>
    )
}

export default Header
