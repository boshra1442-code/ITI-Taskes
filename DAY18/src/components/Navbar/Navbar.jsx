import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm py-3">
      <div className="container">
        <Link
          className="navbar-brand fw-bold fs-3 text-dark"
          to="/"
        >
          ShopZone
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <NavLink
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className="nav-link"
              to="/products"
            >
              Products
            </NavLink>

            <NavLink
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;