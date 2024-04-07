import React from "react";
import FormValidation from "./FormValidation";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";



function App() {
  return (
    // <Link to="/home"></Link>
    <Router>
      <Routes>
    <Route path="/" element={<FormValidation />}/>
    <Route path="/home-page" element={<HomePage />} />
  <Route path="/about-page" element={<AboutPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
