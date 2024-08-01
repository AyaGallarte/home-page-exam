import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import skin9 from '../images/skin9.jfif';

function Hero() {
    return (
        <div className="hero">
            <Row>
                <Col lg={4} xs={12} className="hero-first d-flex flex-column justify-content-center align-items-center">
                  <h1 className="caption-hero">Up to 50% off</h1>
                  <Link className="btn-hero" to="/">SHOP NOW</Link>
                </Col>
                <Col lg={8} xs={12} className="hero-second">
                  <img src={skin9} className="d-block" alt="Hero Image" />
                </Col>
            </Row>
        </div>
    );
}

export default Hero;

