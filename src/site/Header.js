import { useState } from 'react';
import { Col, Row } from 'reactstrap';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    //const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Row className='text-center'>
            <Col id='headerhead' >
                <h1 m='12' id='title' style={headstyle} >Players Index: A Modern Buyers Guide for Guitar Gear</h1>
                <h5 style={{ color: "purple", padding: "6px", fontSize: "45px", fontFamily: "Arial-bold" }} className='text-center'>Ibanez POC Edition</h5>
            </Col>
        </Row>
    );
};
const headstyle = {
    color: "SlateBlue",
    padding: "8px",
    fontSize: "65px",
    fontFamily: "Papyrus"
};

export default Header;