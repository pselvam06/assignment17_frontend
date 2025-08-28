import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jwt-backend-xbd6.onrender.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("❌ Error fetching products:", err);
      });
  }, []);

  return (
    <div
      className="min-vh-100 d-flex align-items-start py-5"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/5650019/pexels-photo-5650019.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.65)",
          zIndex: 1,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-white fw-bold">🛍️ All Products</h2>
          <Link to="/Product" className="btn btn-warning fw-bold shadow">
            ➕ Add Product
          </Link>
        </div>

        {/* Product Cards */}
        {products.length === 0 ? (
          <p className="text-light">No products available</p>
        ) : (
          <div className="row">
            {products.map((p) => (
              <div className="col-md-4 mb-4" key={p._id}>
                <div className="card shadow-lg border-0 rounded-4 h-100">
                  <div
                    className="card-header text-white fw-semibold text-center"
                    style={{
                      background: "linear-gradient(90deg, #007bff, #00c6ff)",
                    }}
                  >
                    {p.title}
                  </div>
                  <div className="card-body">
                    <p className="card-text text-muted">{p.description}</p>
                    <p className="mb-1">
                      <strong>Price:</strong>{" "}
                      <span className="text-success fw-bold">₹{p.price}</span>
                    </p>
                    <p>
                      <strong>Rating:</strong> ⭐ {p.rating}
                    </p>
                  </div>
                  <div className="card-footer text-center bg-light">
                    <button className="btn btn-sm btn-outline-primary me-2">
                      🖊 Edit
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      ❌ Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
