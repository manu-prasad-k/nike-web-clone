import React, { FC, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCircleChevronRight, FaCircleChevronLeft } from 'react-icons/fa6';

interface PopularProps {}

const Popular: FC<PopularProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return (
    <Container className="mt-5 p-5">
      <Row>
        <Col xs={6} sm={9}>
          <h3 className="ms-3 mb-4">Popular Right Now</h3>
        </Col>
        <Col xs={6}sm={3}  className="d-flex justify-content-end gap-2">
          <h5>Shop</h5>
          <div className="d-flex justify-content-center gap-2 mt-1 ">
            <FaCircleChevronLeft onClick={scrollLeft} style={{ cursor: 'pointer' }}  />
            <FaCircleChevronRight onClick={scrollRight} style={{ cursor: 'pointer' }} />
          </div>
        </Col>
      </Row>
      <div className="d-flex overflow-x-scroll" ref={containerRef}>
        <div style={{ minWidth: "30rem" }} className="me-3">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/ae14a560-14f7-4dfc-be44-023a518c77c1/invincible-3-electric-road-running-shoes-nhn3wf.png"
            alt="Nike Just Do It"
            className="img-fluid"
            height="400px"
          />
          <Row className="text-center mb-0">
            <Col>
              <p className="mb-0">Nike Vaporfly 3 Electric</p>
            </Col>
          </Row>
          <Row className="text-center mb-0">
            <Col>
              <p className="mb-0">Women's Road Racing Shoes</p>
            </Col>
          </Row>
          <Row className="text-center mb-0">
            <Col>
              <p className="mb-0">MRP: ₹ 21 395.00</p>
            </Col>
          </Row>
        </div>
        <div style={{ minWidth: "30rem" }} className="me-3">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/fbe575e0-b8c7-45ea-8a71-fa20ae683c06/infinityrn-4-electric-road-running-shoes-FkGQcG.png"
            alt="Nike Just Do It"
            className="img-fluid"
            height="400px"
          />
          <Row className="text-center mb-0">
            <Col>
              <p className="mb-0">Nike Vaporfly 3 Electric</p>
            </Col>
          </Row>
          <Row className="text-center mb-0">
            <Col>
              <p className="mb-0">Women's Road Racing Shoes</p>
            </Col>
          </Row>
          <Row className="text-center mb-0">
            <Col>
              <p className="mb-0">MRP: ₹ 21 395.00</p>
            </Col>
          </Row>
        </div>
        <div style={{ minWidth: "30rem" }} className="me-3">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/467c9f92-2ced-40d1-b663-06b9089c1436/vaporfly-3-electric-road-racing-shoes-CvfhbR.png"
            alt="Nike Just Do It"
            className="img-fluid"
            height="400px"
          />
          <div>
            <Row className="text-center mb-0">
              <Col>
                <p className="mb-0">Nike Vaporfly 3 Electric</p>
              </Col>
            </Row>
            <Row className="text-center mb-0">
              <Col>
                <p className="mb-0">Women's Road Racing Shoes</p>
              </Col>
            </Row>
            <Row className="text-center mb-0">
              <Col>
                <p className="mb-0">MRP: ₹ 21 395.00</p>
              </Col>
            </Row>
          </div>
        </div>
        <div style={{ minWidth: "30rem" }} className="me-3">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/49545dac-67b5-4c49-b82f-83dcd07b375a/pegasus-41-electric-road-running-shoes-CNd0pW.png"
            alt="Nike Just Do It"
            className="img-fluid"
            height="400px"
          />
          <Row className="text-center">
            <Col>
              <p className="mb-0">Nike Vaporfly 3 Electric</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col>
              <p className="mb-0">Women's Road Racing Shoes</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col>
              <p className="mb-0">MRP: ₹ 21 395.00</p>
            </Col>
          </Row>
        </div>
        <div style={{ minWidth: "30rem" }} className="me-3">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/49545dac-67b5-4c49-b82f-83dcd07b375a/pegasus-41-electric-road-running-shoes-CNd0pW.png"
            alt="Nike Just Do It"
            className="img-fluid"
            height="400px"
          />
          <Row className="text-center">
            <Col>
              <p className="mb-0">Nike Vaporfly 3 Electric</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col>
              <p className="mb-0">Women's Road Racing Shoes</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col>
              <p className="mb-0">MRP: ₹ 21 395.00</p>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Popular;
