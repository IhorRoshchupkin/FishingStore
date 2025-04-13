import "./registerPage.css";
import { Button, Card, Form } from "react-bootstrap";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <Card className="register-card">
        <Card.Body>
          <h1 className="text-center">Register</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <div className="Button-group">
              <Button
                variant="primary"
                type="submit"
                className="btn btn-primary"
              >
                REGISTER
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegisterPage;
