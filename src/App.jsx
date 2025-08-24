import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../components/Login";
import Register from "../components/Register";
import Products from "../components/Products";
import ProtectedRoutes from "../components/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/products"
        element={
          <ProtectedRoutes>
            <Products />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
}

export default App;
