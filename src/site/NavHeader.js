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



const NavHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar id='navhead'dark color='primary' sticky='top' expand='lg'>
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
                            <i style={{ color: "aqua"}} className='fa fa-gg fa-lg' /> Your Guide
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact' style={{ color: "purple"}}>
                            <i style={{ color: "SlateBlue"}} className='fa fa-thumbs-up fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
                       
        </Navbar>
    );
};
// const headstyle = {
//     color: "SlateBlue",
//     padding: "8px",
//     fontSize: "65px",
//     fontFamily: "Papyrus"
// };

export default NavHeader;