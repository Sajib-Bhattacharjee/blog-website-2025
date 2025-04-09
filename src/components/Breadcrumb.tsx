import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" className="mt-5 pt-3">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/" className="text-decoration-none">
            <i className="bi bi-house-door-fill"></i> Home
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          // Format the breadcrumb item text
          let displayName = value.replace(/-/g, " ");
          // Capitalize first letter of each word
          displayName = displayName
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

          // Special case for post/:slug
          if (pathnames[0] === "post" && index === 1) {
            displayName = "Article"; // Or you could use the actual post title here
          }

          return (
            <li
              key={to}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? (
                displayName
              ) : (
                <Link to={to} className="text-decoration-none">
                  {displayName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
