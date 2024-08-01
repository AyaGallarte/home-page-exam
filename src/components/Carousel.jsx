import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import skin8 from '../images/skin8.webp';
import skin5 from '../images/skin5.jpg';
import skin12 from '../images/skin12.jpg';
import skin10 from '../images/skin10.jpg';


function CarouselPage() {
    return (
        <div className="slide-wrapper">
            <Carousel id="homepage-feature">
                <Carousel.Item className="carousel-item">
                <img src={skin12} className="d-block carousel-image" alt="First slide" />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                <img src={skin5} className="d-block carousel-image" alt="Second slide" />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                <img src={skin10} className="d-block carousel-image" alt="Third slide" />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselPage;

