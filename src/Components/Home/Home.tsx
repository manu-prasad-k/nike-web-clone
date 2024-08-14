import React, { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';


interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <img 
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1342,c_limit/b29b4905-2da2-48b3-bda8-9eb33333795c/nike-just-do-it.png" 
              alt="Nike Just Do It" 
              className='img-fluid'
            />
          </Col>          
        </Row>

        <Row>

          <Col  >
          <div className='mt-5'>
          <h5 className='text-center mt-3 fw-5'>Nike Electric Pack</h5>
          <h1 className='text-center fw-bolder'>WIN ON AIR</h1>
          </div>
         
              <p className='text-center'>Engineered for those who stand out</p>


  <div className="d-flex justify-content-center mt-3">
    
  

        <Button variant="dark" size="lg" className="mx-2 rounded-pill" >
          Shop Air
        </Button>
  </div>
              
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Home;
