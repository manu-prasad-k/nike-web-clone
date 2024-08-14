import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoIosArrowDown } from "react-icons/io";

interface Footer2Props {}

const Footer2: FC<Footer2Props> = ({}) => {
  return (
    <>
      <Container className="mt-5">
  <Row>
    <Col xs={12} sm={12} md={12} lg={12}>
      <div className="d-flex flex-row gap-3 gap-lg-5 align-items-center justify-content-start justify-content-lg-start flex-wrap">
        <a href="/home" className="text-dark" style={{ textDecoration: 'none' }}>
          <div>© 2024 Nike, Inc. All rights reserved</div>
        </a>
        <a href="/guides" className="text-dark" style={{ textDecoration: 'none' }}>
          <div>Guides <span><IoIosArrowDown /></span></div>
        </a>
        <a href="/terms-of-sale" className="text-dark" style={{ textDecoration: 'none' }}>
          <div>Terms of Sale</div>
        </a>
        <a href="/terms-of-use" className="text-dark" style={{ textDecoration: 'none' }}>
          <div>Terms of Use</div>
        </a>
        <a href="/privacy-policy" className="text-dark" style={{ textDecoration: 'none' }}>
          <div>Nike Privacy Policy</div>
        </a>
      </div>
    </Col>
  </Row>
</Container>

    </>
  );
};

export default Footer2;
