import React from "react";

const FormValidation = () => {
  return (
    <form>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="off"
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          autoComplete="off"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="email"
          name="confirmPassword"
          placeholder="Confirm Password"
          autoComplete="off"
        />
      </div>
      <button>SUBMIT</button>
    </form>
  );
};

export default FormValidation;
