import React from "react";
import { useState } from "react";
import "../Styles/SignInAndSignUpPage.scss";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleFormChange = (e) => {
    const { value, name } = e.target;
    setFormData({ [name]: value });
  };
  return (
    <div className="auth">
      <div className="content">
        <h2 className="title">Join Us</h2>
        <h4 className="sub-title">Create your account to get started</h4>

        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleFormChange}
              required
            />
            <div className="link">
              <p>Already have an account?</p>
              <Link
                to="/signin"
                style={{
                  color: "#222",
                  cursor: "pointer",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Sign In
              </Link>
            </div>
          </div>
          <input type="submit" value="SIGN UP" className="submit-btn" />
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
