import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../components/Login";
import Register from "../components/Register";
import Product from "../components/Product";
import ProtectedRoutes from "../components/ProtectedRoutes";
import ProductList from "../components/ProductList";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

// ✅ Layout for protected pages with Navbar
function AppLayout() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Outlet /> {/* child routes will render here */}
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Public routes (no Navbar) */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected routes (with Navbar) */}
      <Route
        element={
          <ProtectedRoutes>
            <AppLayout />
          </ProtectedRoutes>
        }
      >
        <Route path="/product" element={<Product />} />
        <Route path="/productlist" element={<ProductList />} />
      </Route>
    </Routes>
  );
}

export default App;