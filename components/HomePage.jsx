import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // custom CSS

function HomePage() {
  return (
    <div className="home-page">
      <div className="overlay"></div>

      <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100 home-content">
        <h1 className="fw-bold display-4 text-white mb-3">
          Welcome to My App
        </h1>
        <p className="lead text-light mb-4">
          Explore products and manage your account easily
        </p>

        <div>
          <Link to="/Product" className="btn btn-success btn-lg me-3">
            Go to Login
          </Link>
          <Link to="/ProductList" className="btn btn-primary btn-lg">
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
