export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-4">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          <i className="bi bi-code-slash me-2 text-primary"></i>React Task
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input 
              className="form-form-control me-2 form-control-sm rounded-pill px-3" 
              type="search" 
              placeholder="Search..." 
              aria-label="Search" 
            />
            <button className="btn btn-outline-light btn-sm rounded-pill px-3" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}