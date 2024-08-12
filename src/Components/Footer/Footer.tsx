import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineGlobal } from "react-icons/ai";

interface FooterProps { }

const Footer: FC<FooterProps> = ({ }) => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={4} lg={3}>
                        <div className="fw-bolder">Resources</div>

                        <div className='mt-4'>
                            <Col>Find A Store</Col>
                            <Col>Become A Member</Col>
                            <Col>Send Us Feedback</Col>
                        </div>
                    </Col>

                    <Col xs={12} md={4} lg={3}>
                        <div className='fw-bolder'>Help</div>

                        <div className='mt-4'>
                            <Col>Find A Store</Col>
                            <Col>Become A Member</Col>
                            <Col>Send Us Feedback</Col>
                            <Col>Returns</Col>
                            <Col>Payment Options</Col>
                            <Col>Contact us</Col>
                        </div>
                    </Col>

                    <Col xs={12} md={4} lg={3}>
                        <div className='fw-bolder'>Company</div>
                        <div className='mt-4'>
                            <Col>Find A Store</Col>
                            <Col>Become A Member</Col>
                            <Col>Send Us Feedback</Col>
                            <Col>Investors</Col>
                        </div>
                    </Col>

                    <Col xs={12} md={4} lg={3} className="d-flex  gap-2 justify-content-start justify-content-md-center mt-lg-0">
                        <h6> <AiOutlineGlobal /> India</h6> 
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Footer;
