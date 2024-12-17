import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EmailVerify from "./pages/EmailVerify";
import ResetPAssword from "./pages/ResetPassword";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/reset-password" element={<ResetPAssword />} />
      </Routes>
    </div>
  );
};

export default App;
