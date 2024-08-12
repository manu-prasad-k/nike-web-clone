import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoIosArrowDown } from "react-icons/io";


interface Footer2Props {
  
}

const Footer2: FC<Footer2Props> = ({}) => {
  return (
    <>
      <Container  className="mt-5">
      <Row >


<Col lg={8} xs={2} sm={2} >

<div className="d-flex flex-column flex-lg-row gap-3 gap-lg-5 align-items-center justify-content-center justify-content-lg-start">
<div>© 2024 Nike, Inc. All rights reserved</div>
  <div>Guides <span ><IoIosArrowDown />
  </span></div>
  <div>Terms of Sale</div>
  <div>Terms of Use</div>
  <div>Nike Privacy Policy</div>
</div>



</Col>


</Row>


      </Container>
    </>
  );
};

export default Footer2;