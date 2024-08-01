import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import skin5 from '../images/skin5.jpg';


function Hero() {
    return (
        <div className="hero">
            <Row>
                <Col lg={4} xs={12} className="hero-first">
                  <h1>Up to 50% off</h1>
                </Col>
                <Col lg={8} xs={12} className="hero-second">
                  <img src={skin5} className="d-block" alt="Hero Image" />
                </Col>
            </Row>
        </div>
    );
}

export default Hero;

