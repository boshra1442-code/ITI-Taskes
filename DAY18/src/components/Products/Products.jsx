import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong!");
        setLoading(false);
      });
  }, []);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  if (loading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-primary"></div>
        <p className="mt-3">Loading products...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="container text-center py-5">
        <h3>{error}</h3>
      </div>
    );
  }
  return (
    <>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Our Products</h1>
          <p className="text-muted">
            Find something you love from our collection
          </p>
        </div>
        <div className="mb-5">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search for a product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div className="col-md-6 col-lg-4" key={product.id}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="text-center p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      height: "220px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-light text-primary align-self-start mb-2">
                    {product.category}
                  </span>
                  <h5 className="card-title">
                    {product.title}
                  </h5>
                  <p className="text-muted">
                    ${product.price}
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-primary mt-auto"
                  >
                    View Details
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Product;