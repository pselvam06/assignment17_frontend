import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    rating: "",
  });

  const navigate = useNavigate();

  const handleProductChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    console.log("Form data being sent:", form);

    try {
      await axios.post("https://jwt-backend-xbd6.onrender.com/products/add", form);
      alert("✅ Product added successfully!");
      navigate("/ProductList");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className=" d-flex align-items-center"
      style={{
        minHeight: "100vh",   // full height
    width: "100%",  
        backgroundImage:
          "url('https://images.pexels.com/photos/5702207/pexels-photo-5702207.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200')", // Modern ecommerce bg
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
        <div className="row justify-content-center align-items-center">
          {/* Left Section (Illustration) */}
          <div className="col-lg-6 d-none d-lg-flex justify-content-center">
         
          </div>

          {/* Right Section (Form) */}
          <div className="col-lg-5 col-md-8">
            <div className="card shadow-lg border-0 rounded-4">
              <div
                className="card-header text-center text-white fw-bold fs-4 rounded-top-4"
                style={{
                  background: "linear-gradient(90deg, #007bff, #00c6ff)",
                }}
              >
                🛍️ Add New Product
              </div>
              <div className="card-body p-5">
                <form onSubmit={handleAddProduct}>
                  {/* Product Name */}
                  <div className="mb-3">
                    <label htmlFor="productName" className="form-label fw-semibold">
                      Product Name
                    </label>
                    <input
                      type="text"
                      id="productName"
                      name="title"
                      className="form-control"
                      placeholder="Enter product title"
                      value={form.title}
                      onChange={handleProductChange}
                      required
                    />
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label fw-semibold">
                      Price (₹)
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      className="form-control"
                      placeholder="Enter price"
                      value={form.price}
                      onChange={handleProductChange}
                      required
                      min="1"
                    />
                  </div>

                  {/* Description */}
                  <div className="mb-3">
                    <label htmlFor="productDescription" className="form-label fw-semibold">
                      Description
                    </label>
                    <textarea
                      id="productDescription"
                      name="description"
                      className="form-control"
                      placeholder="Enter product description"
                      value={form.description}
                      onChange={handleProductChange}
                      required
                      minLength={10}
                      rows="3"
                    />
                  </div>

                  {/* Rating */}
                  <div className="mb-3">
                    <label htmlFor="rating" className="form-label fw-semibold">
                      Rating (1 - 5)
                    </label>
                    <input
                      type="number"
                      id="rating"
                      name="rating"
                      className="form-control"
                      placeholder="Enter product rating"
                      value={form.rating}
                      onChange={handleProductChange}
                      required
                      min="1"
                      max="5"
                      step="0.1"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2 fw-bold shadow-sm"
                  >
                    ✅ Add Product
                  </button>
                </form>
              </div>
            </div>

            {/* Back to list link */}
            <p className="text-center text-light mt-3">
              🔙 Go back to{" "}
              <a href="/ProductList" className="text-warning fw-bold">
                Product List
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
