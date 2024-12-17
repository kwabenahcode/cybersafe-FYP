import React, { useState } from "react";
import "./login.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // State to hold email, password, and error message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setErrorMessage(""); // Clear previous error messages

    console.log("Form submitted"); // Debugging log

    try {
      const response = await fetch("http://localhost:8000/api/user/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email, // Make sure this matches what your backend expects
          password: password,
        }),
      });

      const data = await response.json();
      console.log("Response received", data); // Debugging log

      if (response.ok) {
        // Store tokens in localStorage (adjust according to your API response)
        localStorage.setItem("authToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);

        console.log("Tokens stored in localStorage"); // Debugging log

        // Redirect the user to the homepage after login
        navigate("/");
      } else {
        // Display error message from the backend
        setErrorMessage(data.detail || "Login failed. Please try again.");
        console.log("Login failed", data.detail); // Debugging log
      }
    } catch (error) {
      // Handle any network or other errors
      setErrorMessage("Something went wrong. Please try again.");
      console.log("Error caught during login attempt", error); // Debugging log
    }
  };

  return (
    <div>
      <div className="login-main-div">
        <div className="login-first-div"></div>
        <div className="login-second-div">
          <Link onClick={() => navigate(-1)}>
            <ArrowLeft />
          </Link>
          <div className="form-class">
            <h2>Welcome Back</h2>

            {/* Show error message if login fails */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <Form onSubmit={handleSubmit}>
              <label className="login__form__label">Email</label>
              <br />
              <input
                type="email"
                className="login__input"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <label className="login__form__label">Password</label>
              <br />
              <input
                type="password"
                className="login__input"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              <Button type="submit" className="sign_btn">
                Sign in
              </Button>
            </Form>

            <label>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
