import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="container text-center py-5">
      <i className="bi bi-exclamation-circle display-1 text-primary"></i>
      <h1 className="display-3 fw-bold mt-3">
        404
      </h1>
      <h3>Page Not Found</h3>
      <p className="text-muted">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
    </div>
  );
}
export default NotFound;