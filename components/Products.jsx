import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!products.length) return <p>Loading...</p>;

  return (
    <div className="container mt-5  p-4 rounded">
      <h2 className="mb-4 text-center bg-dark fw-bold text-white rounded p-2" >
        Products</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 d-flex flex-column justify-content-between">
              <img
                src={product.image}
                className="card-img-top "
                alt={product.title}
                style={{ height: '250px', objectFit: 'contain' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <h6 className="text-success fw-bold">₹{product.price}</h6>
                 </div>
              <div className="card-footer text-center bg-white border-0">
                <Link to={`/products/${product.id}`} className="btn btn-primary w-100">View Product</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;