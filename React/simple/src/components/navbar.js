import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import Home from './home'
import About from './about'
import News from './news'
import './customNavbar.css'
import { Link } from "react-router-dom";

class Navbar1 extends Component {
  render() {
    return (
      <div>
        <Navbar deafult collapseOnSelect>
       
            <Navbar.Brand>
             <Link to='/' style={{color:'white', textDecoration:'none'}}>CodeLife</Link>
            </Navbar.Brand>
           
            <Navbar.Collapse>
                <Nav className='ml-auto'>
                  <Nav.Item><Nav.Link eventKey={1} component={Home} href='/' to='/' style={{color:'white'}}>Home</Nav.Link></Nav.Item>
                  
                    
                    <Nav.Item><Nav.Link eventKey={2} component={Link} href='/about' to='/about' style={{color:'white'}}>Klen</Nav.Link></Nav.Item>
                    
                    <Nav.Item><Nav.Link eventKey={3} component={Link} href='/news' to='/news' style={{color:'white'}}>Golubovi</Nav.Link></Nav.Item>
                    

                </Nav>
            </Navbar.Collapse>
          
        </Navbar>
      </div>
    );
  }
}

export default Navbar1;
