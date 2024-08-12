import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';


interface DontMissProps {

}

const DontMiss: FC<DontMissProps> = ({ }) => {
    const imageWidth = "100%"; 
    const imageHeight = "750px";

    return (
        <>
            <Container>
                <Row>
                <Col lg={10}>
          <h3 className="ms-3 mb-4">Don't Miss</h3>
        </Col>
                    <Col xs={12} md={6}  sm={12} className="p-0">
                        <Image src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/ae14a560-14f7-4dfc-be44-023a518c77c1/invincible-3-electric-road-running-shoes-nhn3wf.png" fluid style={{ width: imageWidth, height: imageHeight, objectFit: 'cover' }}
                        />
                    </Col>
                    <Col xs={12} md={6}  sm={12} className="p-0">
                        <Image src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_377,c_limit/d9e32816-c3ae-4ec0-b324-2c3ad093d9fe/image.jpg" fluid style={{ width: imageWidth, height: imageHeight, objectFit: 'cover' }}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <h1 className='text-center mt-5 fw-bolder'>AIR JORDAN 39</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at ut odit quis suscipit cupiditate</p>
                    <div  className='d-flex justify-content-center'>
                    <Button variant="dark" className='rounded-pill'>Shop</Button>

                    </div>

                    
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DontMiss;