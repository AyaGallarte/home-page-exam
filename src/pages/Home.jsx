import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CarouselPage from '../components/Carousel';
import Hero from '../components/Hero.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export default function Home() {
    return (
           <div className="page-container">
            <div className="content-wrapper">
                <div>
                    <Hero />
                </div>
                <div>
                    <CarouselPage />
                </div>
            </div>
        </div>
    );
}

