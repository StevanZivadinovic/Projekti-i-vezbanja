import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap'//boorstrap klase
import './home.css';
import klen from "./klen.jpg";
import golubi from './golubi.jpg'
import priroda from './priroda.jpg'

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
               <Row className='show-grid text-center'>
              <Col xs={12} sm={4} className='person-wrapper'>
              <Image src={golubi} roundedCircle  className='profile-pic'/>
              
              <h3>Golubovi</h3>
              <p>Domace zivotinje, u gradu i na selu</p>   
                </Col>
                <Col xs={12} sm={4} className='person-wrapper'>
              <Image src={priroda} roundedCircle  className='profile-pic'/>
              
              <h3>Priroda</h3>
              <p>Svuda je oko nas, u njoj zive golubovi i klenovi</p>   
                </Col> 
                <Col xs={12} sm={4} className='person-wrapper'>
              <Image src={klen} roundedCircle  className='profile-pic'/>
              
              <h3>Klen</h3>
              <p>Recni predator, tesko ga je namamiti, jos teze uhvatit</p>   
                </Col>
                </Row>
           </Container>
        )
    }
}
