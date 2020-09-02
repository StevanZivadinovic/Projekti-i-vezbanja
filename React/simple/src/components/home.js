import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap'//boorstrap klase
import './home.css';

export default class Home extends Component {
    render() {
        return (
           <Container>
               
               <Jumbotron>
                   <h1>Haj</h1>
               </Jumbotron>
               <Link to= '/about'>
                   <Button btnStyle='primary'>About</Button>
               </Link>
           </Container>
        )
    }
}
