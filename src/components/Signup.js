import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  let history = useNavigate();
  const [creadential, setcreadential] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onclick = (e) => {
    setcreadential({ ...creadential, [e.target.name]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST", // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: creadential.name,
        email: creadential.email,
        password: creadential.password,
      }),
    });
    const json = await response.json();
    console.log(json);
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            onChange={onclick}
            value={creadential.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={onclick}
            value={creadential.email}
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={onclick}
            value={creadential.password}
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
