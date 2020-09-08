import React, { Component } from 'react'
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap'//boorstrap klase
import './about.css';
import klen from './klen.jpg'

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src={klen} className='header-image'></Image>
            </div>
        )
    }
}
