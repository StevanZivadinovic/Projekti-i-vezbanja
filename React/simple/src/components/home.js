import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap'//boorstrap klase
import './home.css';


export default class Home extends Component {
    render() {
        return (
           <Container>
               <Jumbotron >
                   <h1>Haj haj haj haj haj haj</h1>
                   <p>This is how to buiild website with React, react-bootstrap</p>
                   <Link to = '/about'>
                   <Button variant="flat" size="xxl" style={{backgroundColor:'blue'}}>About</Button>
               </Link>
               <Link to = '/news'>
                   <Button variant="flat" size="xxl" style={{backgroundColor:'blue'}}>News</Button>
               </Link>
               </Jumbotron>
               <Row className='show-grid text-center'></Row>
              <Col xs={12} sm={4} className='person-wrapper'>
              <Image src="./priroda.jpg" circle className='profile-pic'/>
              <h3>Frank</h3>
              <p>sldjasjdlajsd;kl lkdjskljdlajd jdskjskljdlasjdjla</p>   
                </Col>
           </Container>
        )
    }
}
