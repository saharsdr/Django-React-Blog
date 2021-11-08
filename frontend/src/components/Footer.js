import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <footer>
        <Container>
          <Row style={{ backgroundColor: "whitesmoke", marginTop: "2rem" }}>
            <Col className="text-center py-3">Copyright &copy; Sahar Sadri</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
