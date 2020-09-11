import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/shop'>Shop</Link>

                    

                </nav>
            </div>
        )
    }
}
