import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface FeaturedProps {}

const Featured: FC<FeaturedProps> = () => {
  return (
    <>
      <Container className='mt-5' >
        <Row>
          <Col lg={10}><h3 className='ms-1 mb-4'>Featured</h3></Col>
        </Row>
        <div
          className="d-flex overflow-x-scroll"
          style={{
            overflowX: "scroll",
            scrollbarWidth: "none", 
            msOverflowStyle: "none", 
          }}
        >
     
          <style>{`
            .d-flex::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <div style={{ minWidth: "30rem" }} className="me-3">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_791,c_limit/a2d0c41f-53fc-4968-ab5d-8610c362775c/image.png"
              alt="Nike Just Do It"
              className="img-fluid"
              height="400px"
            />
            <Row className='mb-3'>
              <Col>
                <p className="mb-0">Sabrina 2 'United'</p>
              </Col>
            </Row>
            <Row className='mb-4'>
              <Col >
                <h4 className="mb-0 fw-bolder">Made For Hoopers Who Do It All</h4>
              </Col>
            </Row>
            <Row className=" mb-0">
              <Col>
                <p className="mb-0"><a>Shop</a></p>
              </Col>
            </Row>
          </div>

          <div style={{ minWidth: "30rem" }} className="me-3">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_377,c_limit/bb20b31c-aa11-47f5-937c-c8d3ba6ab1ba/image.png"
              alt="Nike Just Do It"
              className="img-fluid"
              height="400px"
            />
            <div>
              <Row className='mb-3'>
                <Col>
                  <p className="mb-0">Sabrina 2 'United'</p>
                </Col>
              </Row>
              <Row className='mb-4'>
                <Col>
                  <h4 className="mb-0 fw-bolder">Made For Hoopers Who Do It All</h4>
                </Col>
              </Row>
              <Row className=" mb-0">
                <Col>
                  <p className="mb-0"><a>Shop</a></p>
                </Col>
              </Row>
            </div>
          </div>

          <div style={{ minWidth: "30rem" }} className="me-3">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_377,c_limit/d9e32816-c3ae-4ec0-b324-2c3ad093d9fe/image.jpg"
              alt="Nike Just Do It"
              className="img-fluid"
              height="400px"
            />
            <Row className='mb-3'>
              <Col>
                <p className="mb-0">Sabrina 2 'United'</p>
              </Col>
            </Row>
            <Row className='mb-4'>
              <Col>
                <h4 className="mb-0 fw-bolder">Made For Hoopers Who Do It All</h4>
              </Col>
            </Row>
            <Row className=" mb-0">
              <Col>
                <p className="mb-0"><a>Shop</a></p>
              </Col>
            </Row>
          </div>

          <div style={{ minWidth: "30rem" }} className="me-3">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_377,c_limit/866127b4-02d6-4d1c-b7d6-4befb338c018/image.png"
              alt="Nike Just Do It"
              className="img-fluid"
              height="400px"
            />
            <Row className='mb-3'>
              <Col>
                <p className="mb-0">Sabrina 2 'United'</p>
              </Col>
            </Row>
            <Row className='mb-4'>
              <Col>
                <h4 className="mb-0 fw-bolder">Made For Hoopers Who Do It All</h4>
              </Col>
            </Row>
            <Row className=" mb-0">
              <Col>
                <p className="mb-0"><a>Shop</a></p>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Featured;
