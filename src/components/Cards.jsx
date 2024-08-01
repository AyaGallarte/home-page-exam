import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CardGroup, Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import skin14 from '../images/skin14.jfif';
import skin13 from '../images/skin13.jpeg';


function Cards() {
    return (
        <Container className="container-cards">
            <Row>
              <Col lg={6} xs={12}>
                    <Card className="card h-100">
                        <Card.Img 
                            variant="top" 
                            src={skin13} 
                            className="product-image" 
                            alt="Card Image 1" 
                        />
                        <Card.Body className="cardBody">
                            <Card.Title className="custom-card-title">Glass Skin Set</Card.Title>
                            <Card.Text className="custom-card-description">K-Beauty Pro</Card.Text>
                            <Card.Text className="custom-card-price">₱1000.00</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} xs={12}>
                    <Card className="card">
                        <Card.Img 
                            variant="top" 
                            src={skin14} 
                            className="product-image" 
                            alt="Card Image 1" 
                        />
                        <Card.Body className="cardBody">
                            <Card.Title className="custom-card-title">Reguvinating Set</Card.Title>
                            <Card.Text className="custom-card-description">Skin Rejuvenation</Card.Text>
                            <Card.Text className="custom-card-price">₱1000.00</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Cards;