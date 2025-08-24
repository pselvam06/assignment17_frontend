import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 


function Login() {
  const [ form, setForm ] = useState({
    email:"",
    password:"",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value});
  };

const handleLogin = async (e) => {
  e.preventDefault();
  try{
    const res = await axios.post("http://localhost:8081/auth/login",form);
    localStorage.setItem("token",res.data.token);
    navigate("/products");
  }catch(err){
    console.error(err);
  }
};

  return (    
    <div
  className="container d-flex justify-content-center align-items-center"
  style={{ minHeight: "100vh" }}
>
  <div className="row w-100">
    <div className="col-md-6 offset-md-3">
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleLogin}>


            <div className="mb-3">
              <label htmlFor="formEmail" className="form-label">Email</label>
              <input
                type="email"               
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="formPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="formPassword"
                name="password"
                className="form-control"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>

          <div className="text-center mt-3">
            <span>New user? </span>
            <a href="/register">Register here</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Login;
