import { useState } from 'react';
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4">
      <div className="card-body p-4 text-center">
        <h6 className="text-uppercase text-secondary fw-bold mb-3 small">
          Interactive Counter
        </h6>
        <h1 className="display-3 fw-bold text-dark my-3">{count}</h1>
        <div className="d-flex justify-content-center gap-2 mt-4">
          <button 
            className="btn btn-outline-secondary px-4 rounded-3" 
            onClick={() => setCount(count - 1)}
          >
            - Decrement
          </button>
          <button 
            className="btn btn-light text-muted border px-3 rounded-3" 
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          <button 
            className="btn btn-primary px-4 rounded-3 fw-semibold" 
            onClick={() => setCount(count + 1)}
          >
            + Increment
          </button>
        </div>
      </div>
    </div>
  );
}