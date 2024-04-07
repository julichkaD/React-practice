import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <h1>
        Welcome to the home page <h1></h1>Hello, dear {props.formData.username}{" "}
        !
      </h1>
      <Link to="/about-page/">About</Link>
    </div>
  );
}

export default HomePage;
