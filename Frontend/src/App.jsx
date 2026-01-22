import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<div>Welcome to HomelyHub</div>} />
      </Routes>
    </Router>
  );
};

export default App;
