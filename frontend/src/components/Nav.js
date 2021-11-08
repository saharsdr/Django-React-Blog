import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Nav100() {
  return (
    <>
      <Navbar collapseOnSelect expand="xl" bg="light">
        <Container>
          <Navbar.Brand className="p-4" href="#home">
            جایی برای نوشتن
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>
                <Link to="/">صفحه نخست</Link>
              </Nav.Link>

              <Nav.Link href="#NewPost">جدیدترین پست ها</Nav.Link>
              <Nav.Link href="#HoshMasnoee">هوش مصنوعی</Nav.Link>
              <Nav.Link href="#pricing">مهندسی نرم افزار</Nav.Link>
              <Nav.Link href="#pricing">اینترنت اشیا</Nav.Link>
              <Nav.Link href="#pricing">امنیت سایبری</Nav.Link>
              <Nav.Link href="#pricing">سرگرمی</Nav.Link>
            </Nav>
            <Nav className="mx-auto">
              <Nav.Link href="#">سحر صدری</Nav.Link>
              <Nav.Link href="#">پست جدید</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav100;
