import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex vh-100 align-items-center justify-content-center bg-dark text-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="mb-3">Oops! Page not found</h2>
        <p className="lead mb-4">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary btn-lg">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
