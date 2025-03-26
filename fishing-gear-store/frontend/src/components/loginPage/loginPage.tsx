import "bootstrap/dist/css/bootstrap.min.css";
import "./loginPage.css";
import React, { useRef, useState, useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../features/auth/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  // Use useNavigate hook to navigate to other pages
  const navigate = useNavigate();

  // Use useRef hook to get input values
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // useState hook to manage login state
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    if (!emailRef.current || !passwordRef.current) {
      toast.error("Please fill in all fields");
      return;
    }

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    setIsLoading(true); // Set loading state to true

    try {
      const token = await userLogin(email, password);
      dispatch(loginSuccess({ email, token }));
      toast.success("Login successful!");
      navigate("/products"); // Go to Homepage
    } catch (err) {
      toast.error("Wrong login or password");
    } finally {
      setIsLoading(false); // Loading state ending
    }
  };

  return (
    <div className="login-page">
      <Card className="login-card">
        <Card.Body>
          <h1 className="text-center">Login</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
            </Form.Group>

            <div className="Button-group">
              <Button
                variant="primary"
                type="button"
                className="btn btn-primary"
                onClick={handleButtonClick}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "SIGN IN"}
              </Button>
              <Button
                variant="primary"
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate("/register")} // Go to Register Page
              >
                CREATE AN ACCOUNT
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
