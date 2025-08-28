import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // custom CSS

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8081/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/Product");
    } catch (err) {
      console.error(err);
      alert("Invalid credentials, please try again!");
    }
  };

  return (
    <div className="login-page">
      <div className="overlay"></div>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row w-100">
          <div className="col-md-6 offset-md-3">
            <div className="card shadow-lg rounded-4 border-0 p-4 login-card">
              <div className="card-body">
                <h2 className="text-center mb-4 fw-bold text-primary">Login</h2>
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="formEmail" className="form-label fw-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                      placeholder="Enter email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="formPassword"
                      className="form-label fw-semibold"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="formPassword"
                      name="password"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      value={form.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-100">
                    Login
                  </button>
                </form>

                <div className="text-center mt-4">
                  <p className="mb-1">
                    New user?{" "}
                    <a href="/register" className="text-decoration-none fw-bold">
                      Register here
                    </a>
                  </p>
                  <p>
                    Back to{" "}
                    <a href="/" className="text-decoration-none fw-bold">
                      Home
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Login;
