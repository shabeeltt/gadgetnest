import React from "react";
import { useState } from "react";
import "../Styles/SignInPage.scss";

const SignInPage = () => {
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
    <div className="sign-in">
      <div className="content">
        <h2>Sign in with your E-mail and Password</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleFormChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input type="submit" value="SIGN IN" />
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
