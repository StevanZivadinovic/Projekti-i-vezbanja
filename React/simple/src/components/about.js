import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap"; //boorstrap klase
import "./about.css";
import priroda from "./priroda.jpg";

import klen from "./klen.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src={priroda} className="header-image"></Image>
        <Container>
          <Row>
            <Col xs={12} sm={8} smOffset={2}>
              {/**xs znaci extra small ekran, a sm je small ekran */}
              <Image
                src={klen}
                className="about-profile-pic"
                roundedCircle
              ></Image>

              <h1>Klen</h1>
              <p>
                Klen je za sportski ribolov najznačajnija riba roda Leuciscus.
                Od 12 vrsta ovog roda, vrsta cephalus dostiže najveću težinu i
                najbrojnija je u našim vodama. Klen je široko rasprostranjen u
                vodama dunavskog sliva, prvenstveno u malim rekama i zalazi sve
                do pastrmskog područja, a nizvodno od ušća u velike reke. U
                salmonidnim vodama boravi u delu reke sa sporijim tokom i sa
                opadanjem nadmorske visine brojnost mu se povećava.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
