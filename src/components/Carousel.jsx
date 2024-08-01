import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import watch2 from '../images/watch2.jpg';
import phone1 from '../images/phone1.avif';
import skin8 from '../images/skin8.jpg';

function CarouselPage() {
    return (
        <div className="slide-wrapper">
            <Carousel id="homepage-feature">
                <Carousel.Item className="carousel-item">
                <img src={phone1} className="d-block carousel-image" alt="First slide" />
                    <Carousel.Caption>
                        <h1 className="carousel-header">Get 10% discount on your first purchase</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                <img src={skin8} className="d-block carousel-image" alt="Second slide" />
                    <Carousel.Caption>
                        <h1 className="carousel-header">Enjoy free-shipping on selected items</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                <img src={watch2} className="d-block carousel-image" alt="Third slide" />
                    <Carousel.Caption>
                        <h1 className="carousel-header">Shop your favorite items here</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselPage;

