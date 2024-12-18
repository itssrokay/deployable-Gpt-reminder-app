import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";
import { url } from "./data";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [countryCode, setCountryCode] = useState("+91"); // Add this line
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/signup`, {
        name,
        email,
        password,
        role,
        phoneNumber,
      });
      console.log("Signup response:", response.data);
      alert("Signup successful. Please login.");
      navigate("/login");
    } catch (error) {
      console.error(
        "Signup failed:",
        error.response ? error.response.data : error.message
      );
      alert(
        `Signup failed: ${
          error.response && error.response.data
            ? error.response.data.message
            : error.message
        }`
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="patient">Patient</option>
            <option value="caregiver">Caregiver</option>
          </select>
          <div className="phone-input">
            <input
              type="text"
              placeholder="Country Code"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
