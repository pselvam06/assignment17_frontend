import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css"; // custom css

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "Buyer", // default
    mobilenumber: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Form data being sent:", form);
    try {
      await axios.post("http://localhost:8081/auth/register", form);
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration failed, please try again!");
    }
  };

  return (
    <div className="register-page">
      <div className="overlay"></div>
      <div className="container d-flex justify-content-center align-items-center min-vh-50">
        <div className="row w-100">
          <div className="col-md-6 offset-md-3">
            <div className="card shadow-lg rounded-4 border-0 p-4 register-card">
              <div className="card-body">
                <h2 className="text-center mb-4 fw-bold text-success">Register</h2>

                <form onSubmit={handleRegister}>
                  {/* Name */}
                  <div className="mb-3">
                    <label htmlFor="formName" className="form-label fw-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      id="formName"
                      className="form-control "
                      name="username"
                      placeholder="Enter your name"
                      value={form.username}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="formEmail" className="form-label fw-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      id="formEmail"
                      name="email"
                      className="form-control "
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="formPassword" className="form-label fw-semibold">
                      Password
                    </label>
                    <input
                      type="password"
                      id="formPassword"
                      name="password"
                      className="form-control "
                      placeholder="Enter a password"
                      value={form.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Role */}
                  <div className="mb-3">
                    <label htmlFor="formRole" className="form-label fw-semibold">
                      Role
                    </label>
                    <select
                      id="formRole"
                      name="role"
                      className="form-select "
                      value={form.role}
                      onChange={handleChange}
                    >
                      <option value="Buyer">Buyer</option>
                      <option value="Seller">Seller</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>

                  {/* Mobile Number */}
                  <div className="mb-3">
                    <label htmlFor="mobilenumber" className="form-label fw-semibold">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      id="mobilenumber"
                      name="mobilenumber"
                      className="form-control "
                      placeholder="Enter mobile number"
                      value={form.mobilenumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-success btn-lg w-100">
                    Register
                  </button>
                </form>

                <div className="text-center mt-4">
                  <p className="mb-1">
                    Already have an account?{" "}
                    <a href="/login" className="text-decoration-none fw-bold">
                      Login here
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
};

export default Register;
