function About() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span className="badge bg-light text-primary mb-3">
          About Us
        </span>
        <h1 className="fw-bold">
          Simple. Beautiful. Useful.
        </h1>
        <p className="text-muted">
          A small React project built to practice modern concepts.
        </p>
      </div>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card feature-card h-100 border-0 shadow-sm p-4">
            <i className="bi bi-lightning-charge-fill fs-1 text-primary"></i>
            <h4 className="mt-3">Fast</h4>
            <p className="text-muted">
              Fast navigation and dynamic content using React.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card feature-card h-100 border-0 shadow-sm p-4">
            <i className="bi bi-phone-fill fs-1 text-primary"></i>
            <h4 className="mt-3">Responsive</h4>
            <p className="text-muted">
              A clean design that works on different screen sizes.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card feature-card h-100 border-0 shadow-sm p-4">
            <i className="bi bi-code-slash fs-1 text-primary"></i>
            <h4 className="mt-3">React</h4>
            <p className="text-muted">
              Built with components, hooks and React Router.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;