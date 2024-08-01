import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CarouselPage from '../components/Carousel';
import Hero from '../components/Hero.jsx';
import Cards from '../components/Cards.jsx';
import Footer from '../components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export default function Home() {
    return (
           <div className="page-container">
            <div className="content-wrapper">
                <div>
                    <Hero />
                </div>
                <div className="home-content">
                    <Col lg={6} xs={12} className="home-carousel">
                        <CarouselPage />
                    </Col>
                    <Col lg={3} xs={12} className="home-cards">
                        <Cards />
                    </Col>
                </div>
                <div className="footer-container">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

