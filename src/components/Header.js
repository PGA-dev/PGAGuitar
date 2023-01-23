import { useState } from 'react';
import {Col} from 'reactstrap';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Ibanez from '../app/assets/img/Ibanez_logo.png';
import profile from '../app/assets/img/profile.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='lg'>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='me-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/' style={{ color: "purple"}}>
                            <i style={{ color: "SlateBlue"}} className='fa fa-h-square fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/guitardirectory' style={{ color: "purple"}}>
                            <i style={{ color: "aqua"}}  className='fa fa-cogs fa-sm' /> Guitar
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/bassdirectory' style={{ color: "purple"}}>
                            <i style={{ color: "SlateBlue"}} className='fa fa-gear fa-sm' /> Bass
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about' style={{ color: "purple"}}>
                            <i style={{ color: "aqua"}} className='fa fa-gg fa-lg' /> Guide
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact' style={{ color: "purple"}}>
                            <i style={{ color: "SlateBlue"}} className='fa fa-thumbs-up fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
                <Col m='2'>
                    <h1 id='title' className='text-center' style={headstyle} >Players Index: A Modern Buyers Guide for Guitar Gear</h1>
                    <h5 style={{ color: "pink" ,padding: "6px", fontSize: "45px",fontFamily: "Arial-bold"}} className='text-center'>Ibanez POC Edition</h5>
                    </Col>
            </Collapse>
            
            <NavbarBrand className='text-left' href='https://www.ibanez.com/usa/'>
                <img  src={Ibanez} alt='Ibanez logo' className='float-start' />

            </NavbarBrand>            
        </Navbar>
    );
};
const headstyle = {
    color: "SlateBlue",
    padding: "8px",
    fontSize: "65px",
    fontFamily: "Papyrus"
};

export default Header;