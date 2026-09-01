import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-primary"></div>
        <p className="mt-3">Loading...</p>
      </div>
    );
  }
  return (
    <div className="container py-5">
      <Link to="/products" className="btn btn-outline-primary mb-4">
        ← Back to Products
      </Link>
      <div className="row align-items-center g-5">
        <div className="col-md-5 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{
              height: "400px",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="col-md-7">
          <span className="badge bg-light text-primary mb-3">
            {product.category}
          </span>
          <h1 className="fw-bold">{product.title}</h1>
          <h3 className="text-primary my-3">
            ${product.price}
          </h3>
          <p className="text-muted">
            {product.description}
          </p>
          <div className="mb-4">
            ⭐ {product.rating.rate} / 5
            <span className="text-muted ms-2">
              ({product.rating.count} reviews)
            </span>
          </div>
          <button className="btn btn-primary btn-lg">
            <i className="bi bi-cart-plus"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;