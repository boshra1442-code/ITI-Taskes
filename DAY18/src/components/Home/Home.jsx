import { useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [likes, setLikes] = useState(0);
  return (
    <div>
      <section className="hero-section py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="badge bg-white text-primary mb-3">
                Welcome to our store
              </span>
              <h1 className="display-3 fw-bold">
                Find What You
                <br />
                <span>Love.</span>
              </h1>
              <p className="lead text-muted my-4">
                Discover amazing products, great prices,
                and everything you need in one place.
              </p>
              <Link
                to="/products"
                className="btn btn-primary btn-lg px-4"
              >
                Explore Products
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
            <div className="col-lg-5 text-center mt-5 mt-lg-0">
              <div className="hero-icon">
                <i className="bi bi-bag-heart-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="text-center">
          <h2 className="fw-bold">Enjoying our store?</h2>
          <p className="text-muted">
            Show us some love ❤️
          </p>
          <button
            className="btn btn-outline-primary"
            onClick={() => setLikes(likes + 1)}
          >
            <i className="bi bi-heart-fill me-2"></i>
            Like {likes}
          </button>
        </div>
      </section>
    </div>
  );
}
export default Home;