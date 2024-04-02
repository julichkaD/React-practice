import React, { useState } from "react";
import "./App.css";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const[errors, setErrors]= useState({});
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    }else if(formData.password.length <6) {
         validationErrors.password = "Password should be at least 6 characters";
        }

     if (!formData.confirmPassword.trim()) {
       validationErrors.confirmPassword = "Confirm password is required";
     }else if (formData.confirmPassword.length < 6) {
       validationErrors.confirmPassword = "Password should be at least 6 characters";
     }

     if(formData.password !== formData.confirmPassword) {
        validationErrors.password = "Password not matched"
     }
     setErrors(validationErrors)
     if(Object.keys(validationErrors)===0) {
        alert("Form submitted");
     }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="validation">
        <h1>My Validation Form</h1>
        <div className="input-wrapper">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            autoComplete="off"
            className="input-field"
            onChange={handleChange}
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div className="input-wrapper">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="email@gmail.com"
            autoComplete="off"
            className="input-field"
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="input-wrapper">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            placeholder="********"
            autoComplete="off"
            className="input-field"
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div className="input-wrapper">
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="********"
            autoComplete="off"
            className="input-field"
            onChange={handleChange}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
