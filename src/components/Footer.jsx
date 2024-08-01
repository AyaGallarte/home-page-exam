import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import skin8 from '../images/skin8.webp';
import skin5 from '../images/skin5.jpg';
import skin12 from '../images/skin12.jpg';
import skin10 from '../images/skin10.jpg';


function Footer() {
    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h5>About Us</h5>
                            <p>
                                We are dedicated to providing the best products at unbeatable prices. 
                                Our goal is to make your shopping experience as enjoyable and convenient as possible.
                            </p>
                        </div>
                       
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <div className="social-media">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mt-5">
                            <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

