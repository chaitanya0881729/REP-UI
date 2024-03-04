import React from 'react';
import '../../styles/Footer.css'

export function FooterContainer() {
    return (
        <div className="footer">
            <div className="wrapper">
                <div className="row">
                    <div className="column">
                        <p className="title">About Us</p>
                        <a href="#" className="link">Story</a>
                        <a href="#" className="link">Clients</a>
                        <a href="#" className="link">Testimonials</a>
                    </div>
                    <div className="column">
                        <p className="title">Services</p>
                        <a href="#" className="link">Marketing</a>
                        <a href="#" className="link">Consulting</a>
                        <a href="#" className="link">Development</a>
                        <a href="#" className="link">Design</a>
                    </div>
                    <div className="column">
                        <p className="title">Contact Us</p>
                        <a href="#" className="link">United States</a>
                        <a href="#" className="link">United Kingdom</a>
                        <a href="#" className="link">Australia</a>
                        <a href="#" className="link">Support</a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
