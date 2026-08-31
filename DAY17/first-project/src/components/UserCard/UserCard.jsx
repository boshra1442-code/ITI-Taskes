export default function UserCard({ name, role }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4">
      <div className="card-body p-4 d-flex align-items-center">
        <div>
          <h5 className="card-title mb-1 fw-bold text-dark">{name}</h5>
          <span className="badge bg-primary-subtle text-primary border border-primary-subtle mb-2">
            {role}
          </span>
          <p className="card-text text-muted small mb-0">
            Working on React Components & Props passing.
          </p>
        </div>
      </div>
    </div>
  );
}