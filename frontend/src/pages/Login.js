import React from "react";
import { Form, Button } from "react-bootstrap";
function Login() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>شماره تلفن</Form.Label>
          <Form.Control type="number" placeholder="09385137443" />
          <Form.Text className="text-muted">
            ما شماره تلفن شما را با کسی به اشتراک نخواهیم گذاشت.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>رمز</Form.Label>
          <Form.Control type="password" placeholder="رمز" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          ورود
        </Button>
      </Form>
    </div>
  );
}

export default Login;
