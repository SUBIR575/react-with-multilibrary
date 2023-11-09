import React, { useState } from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const TopNavbar = () => {
  const [show, setShow] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cart = useSelector((state) => state.cartReducer);
  console.log({ cart });
  return (
    <>
      <Navbar collapseOnSelect  expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Demo Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="ms-auto"
            >
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/multicheckbox">Multi Checkbox</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/multiselect">Multi Select</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/shop">Shop</Link>
              </Nav.Link>
              <Nav.Link>
                <h5>
                  <i class="bi bi-basket" onClick={handleShow}>
                    <span className="cart-icon">{cart.length}</span>
                  </i>
                </h5>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
