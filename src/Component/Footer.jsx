import React from "react";
import { Container, Col, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <div className="bottom-footer">
        <div className="footer">
          <Container>
            <Row>
              <Col>
                <p style={{ textAlign: "center" }}>Footer</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
