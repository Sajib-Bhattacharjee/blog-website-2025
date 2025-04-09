import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Auto-redirect after countdown
    if (countdown <= 0) {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div
            className="card border-0 shadow-lg p-5"
            style={{
              background:
                "url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80') no-repeat center center",
              backgroundSize: "cover",
              position: "relative",
              color: "white",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0,0,0,0.7)",
                zIndex: 1,
              }}
            ></div>

            <div style={{ position: "relative", zIndex: 2 }}>
              <h1 className="display-1 fw-bold mb-0">404</h1>
              <div className="mb-4 text-uppercase">Page Not Found</div>

              <div className="error-emoji mb-4" style={{ fontSize: "5rem" }}>
                😕
              </div>

              <p className="lead mb-4">
                We couldn't find the page you're looking for. It might have been
                moved, deleted, or perhaps never existed in the first place.
              </p>

              <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-4">
                <Link to="/" className="btn btn-primary btn-lg">
                  <i className="bi bi-house-door me-2"></i>
                  Back to Home
                </Link>

                <button
                  onClick={() => navigate(-1)}
                  className="btn btn-outline-light btn-lg"
                >
                  <i className="bi bi-arrow-left me-2"></i>
                  Go Back
                </button>
              </div>

              <div className="mt-4">
                <p>
                  Auto-redirecting to home page in{" "}
                  <span className="badge bg-danger">{countdown}</span> seconds
                </p>

                <div className="progress" style={{ height: "5px" }}>
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                    role="progressbar"
                    style={{ width: `${(countdown / 10) * 100}%` }}
                    aria-valuenow={(countdown / 10) * 100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p>Looking for something specific? Try these popular pages:</p>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <Link to="/categories" className="btn btn-sm btn-outline-primary">
                <i className="bi bi-grid me-1"></i> Categories
              </Link>
              <Link to="/about" className="btn btn-sm btn-outline-primary">
                <i className="bi bi-info-circle me-1"></i> About
              </Link>
              <Link to="/contact" className="btn btn-sm btn-outline-primary">
                <i className="bi bi-envelope me-1"></i> Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
