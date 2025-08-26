import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const { showalert } = props;
  let history = useNavigate();
  const [creadential, setcreadential] = useState({ email: "", password: "" });
  const onclick = (e) => {
    setcreadential({ ...creadential, [e.target.name]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST", // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: creadential.email,
        password: creadential.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      showalert("loggedin successfully", "success");
      history("/");
    } else {
      showalert("invalid credential", "danger");
    }
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={creadential.email}
            onChange={onclick}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            value={creadential.password}
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onclick}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
