import React, { FC } from 'react';
import { Container, Navbar, Nav, Form, FormControl, InputGroup} from 'react-bootstrap';
import { SiNike } from 'react-icons/si';
import { RiShoppingBag4Line } from "react-icons/ri";


interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <Navbar  expand="lg">
      <Container>
        {/* Navbar Brand */}
        <Navbar.Brand href="#home" className="fs-1 ">
            <SiNike />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Centered Nav Links */}
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="fw-bold">New & Featured</Nav.Link>
            <Nav.Link href="#link1" className="fw-bold">Men</Nav.Link>
            <Nav.Link href="#link2" className="fw-bold">Women</Nav.Link>
            <Nav.Link href="#link3" className="fw-bold">Kids</Nav.Link>
            <Nav.Link href="#link4" className="fw-bold">Sale</Nav.Link>
            <Nav.Link href="#link5" className="fw-bold">Customise</Nav.Link>
            <Nav.Link href="#link6" className="fw-bold">SNKRS</Nav.Link>
          </Nav>
          {/* Search Form */}
          <Form className="d-flex ms-auto">
            <InputGroup>
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              
            </InputGroup>
            <div className='fs-4 ms-3 mb-1'>
            <RiShoppingBag4Line />

            </div>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
