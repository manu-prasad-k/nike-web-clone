import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineGlobal } from "react-icons/ai";

interface FooterProps { }

const Footer: FC<FooterProps> = ({ }) => {
    return (
        <>
            <Container>
                <Row className='mt-5'>
                    <Col xs={12} md={4} lg={3}>
                        <div className="fw-bolder"  style={{cursor: 'pointer'}}>Resources</div>
                        <div className='mt-4'>
                            <a href="/find-a-store" className="text-dark" style={{ textDecoration: 'none' }}><Col>Find A Store</Col></a>
                            <a href="/become-a-member" className="text-dark" style={{ textDecoration: 'none' }}><Col>Become A Member</Col></a>
                            <a href="/send-us-feedback" className="text-dark" style={{ textDecoration: 'none' }}><Col>Send Us Feedback</Col></a>
                        </div>
                    </Col>

                    <Col xs={12} md={4} lg={3}>
                        <div className='fw-bolder'  style={{cursor: 'pointer'}}>Help</div>
                        <div className='mt-4'>
                            <a href="/find-a-store" className="text-dark" style={{ textDecoration: 'none' }}><Col>Find A Store</Col></a>
                            <a href="/become-a-member" className="text-dark" style={{ textDecoration: 'none' }}><Col>Become A Member</Col></a>
                            <a href="/send-us-feedback" className="text-dark" style={{ textDecoration: 'none' }}><Col>Send Us Feedback</Col></a>
                            <a href="/returns" className="text-dark" style={{ textDecoration: 'none' }}><Col>Returns</Col></a>
                            <a href="/payment-options" className="text-dark" style={{ textDecoration: 'none' }}><Col>Payment Options</Col></a>
                            <a href="/contact-us" className="text-dark" style={{ textDecoration: 'none' }}><Col>Contact Us</Col></a>
                        </div>
                    </Col>

                    <Col xs={12} md={4} lg={3}>
                        <div className='fw-bolder'  style={{cursor: 'pointer'}}>Company</div>
                        <div className='mt-4'>
                            <a href="/find-a-store" className="text-dark" style={{ textDecoration: 'none' }}><Col>Find A Store</Col></a>
                            <a href="/become-a-member" className="text-dark" style={{ textDecoration: 'none' }}><Col>Become A Member</Col></a>
                            <a href="/send-us-feedback" className="text-dark" style={{ textDecoration: 'none' }}><Col>Send Us Feedback</Col></a>
                            <a href="/investors" className="text-dark" style={{ textDecoration: 'none' }}><Col>Investors</Col></a>
                        </div>
                    </Col>

                    <Col xs={12} md={4} lg={3} className="d-flex gap-2 justify-content-start justify-content-md-center mt-lg-0">
                        <h6  style={{cursor: 'pointer'}}><AiOutlineGlobal /> India</h6> 
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Footer;
