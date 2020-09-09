import React, { Component } from "react";
import "./news.css";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap"; //boorstrap klase
import priroda from "./priroda.jpg";
import golubi from "./golubi.jpg";
export default class News extends Component {
  render() {
    return (
      <div>
        <Image src={priroda} className="header-image"></Image>
        <Container>
          <Row>
            <Col xs={12} sm={8} smOffset={2}>
              {/**xs znaci extra small ekran, a sm je small ekran */}
              <Image
                src={golubi}
                className="about-profile-pic"
                roundedCircle
              ></Image>

              <h1>Golubovi</h1>
              <p>
                Često nazivani "letećim pacovima", gradski golubovi nisu na
                dobrom glasu i mnogi ljudi ih povezuju s bolestima, iako grupe
                za zaštitu životinja tvrde da to nije istina. Zdravstveni rizici
                vezani za golubove nisu veći od rizika koje predstavljaju kućni
                ljubimci ili druge ptice, tvrdi nemački savez za dobrobit
                životinja. Aktivisti pozivaju građane da ne teraju golubove, jer
                je to stresno za ptice, nego da pokažu više poštovanja tim
                pernatim prijateljima. Oni koji hrane golubove komadićima hleba
                ili ostacima mesa takođe im ne čine dobro. Takva hrana je loša
                za ptice, jer joj nedostaju važne hranjive materije.
              </p>
            </Col>
            <Col xs={12} sm={4} className='sidebar-section'>
                <Image src={priroda}></Image> 
                <p>Lepa priroda je oko nas, zelim da joj cujem glas</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
