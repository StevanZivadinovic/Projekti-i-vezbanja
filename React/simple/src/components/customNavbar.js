import React, { Component } from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar default collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>CodeLife</Link>
                        </Navbar.Brand>
                    </Navbar.Header>

                </Navbar>
            </div>
        )
    }
}
