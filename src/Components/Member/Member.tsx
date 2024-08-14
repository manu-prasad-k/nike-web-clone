import React, { FC } from 'react';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';

interface MemberProps {}

const Member: FC<MemberProps> = () => {
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col lg={10}><h3 className='ms-3 mb-4' style={{cursor: 'pointer'}}>Member Benefits</h3></Col>
        </Row>
        <div
          className="d-flex overflow-x-scroll"
          style={{
            overflowX: "scroll",
            scrollbarWidth: "none", 
            msOverflowStyle: "none"
          }}
        >
          <div className="me-3">
            <Card 
              className="border-0" 
              style={{ maxWidth: "30rem", flex: "0 0 60%", cursor: 'pointer' }}
            >
              <Card.Img 
                variant="top" 
                src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_390,c_limit/cb28c551-b85b-479f-8fc3-40ad4e7c9ca4/nike-just-do-it.jpg"
                style={{ borderRadius: "0", flex: "0 0 60%" }} 
              />
              <Card.ImgOverlay className='d-flex align-items-end '>
                <Card.Text>
                  <div className='ms-6'>
                    <h5 className='text-light'>Member Product</h5>
                    <h2 className='text-light'>Your Exclusive Access</h2>
                    <Button variant="light" size="sm" className="mx-2 rounded-pill">
                      Shop
                    </Button>
                  </div>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="me-3">
            <Card 
              className="border-0" 
              style={{ minWidth: "30rem", cursor: 'pointer' }}
            >
              <Card.Img 
                variant="top" 
                src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_390,c_limit/100ca749-1a94-4f98-bc43-a58e7e9cdbcf/nike-just-do-it.png"
                style={{ borderRadius: "0", flex: "0 0 60%" }} 
              />
              <Card.ImgOverlay className='d-flex align-items-end mb-3'>
                <Card.Text>
                  <h5 className='text-light ms-5'>Member Product</h5>
                  <h2 className='text-light ms-5'>Your Exclusive Access</h2>
                  <Button variant="light" size="sm" className="mx-2 rounded-pill ms-5">
                    Shop
                  </Button>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="me-3">
            <Card 
              className="border-0" 
              style={{ minWidth: "30rem", cursor: 'pointer' }}
            >
              <Card.Img 
                variant="top" 
                src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_390,c_limit/39412611-0af5-4770-8c2e-ef5c23bc6a3d/nike-just-do-it.jpg"
                style={{ borderRadius: "0", flex: "0 0 60%" }} 
              />
              <Card.ImgOverlay className='d-flex align-items-end mb-3'>
                <Card.Text>
                  <h5 className='text-light ms-5'>Member Product</h5>
                  <h2 className='text-light ms-5'>Your Exclusive Access</h2>
                  <Button variant="light" size="sm" className="mx-2 rounded-pill ms-5">
                    Shop
                  </Button>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="me-3">
            <Card 
              className="border-0" 
              style={{ minWidth: "30rem", cursor: 'pointer' }}
            >
              <Card.Img 
                variant="top" 
                src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_390,c_limit/a9767bce-db10-41ff-9eb5-f5daf8bbb3e6/nike-just-do-it.png"
                style={{ borderRadius: "0", flex: "0 0 60%" }} 
              />
              <Card.ImgOverlay className='d-flex align-items-end mb-3'>
                <Card.Text>
                  <h5 className='text-light ms-5'>Member Product</h5>
                  <h2 className='text-light ms-5'>Your Exclusive Access</h2>
                  <Button variant="light" size="sm" className="mx-2 rounded-pill ms-5">
                    Shop
                  </Button>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Member;
