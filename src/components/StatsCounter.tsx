import React, { useState, useEffect } from "react";
import { mockBlogPosts, categories } from "../utils/mockData";

interface StatsCounterProps {
  showTitle?: boolean;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ showTitle = true }) => {
  const [counts, setCounts] = useState({
    total: 0,
    programming: 0,
    webDev: 0,
    design: 0,
    technology: 0,
    tutorials: 0,
  });

  const [animatedCounts, setAnimatedCounts] = useState({
    total: 0,
    programming: 0,
    webDev: 0,
    design: 0,
    technology: 0,
    tutorials: 0,
  });

  useEffect(() => {
    // Calculate actual counts
    const total = mockBlogPosts.length;
    const programming = mockBlogPosts.filter((post) =>
      post.categories.includes("Programming")
    ).length;
    const webDev = mockBlogPosts.filter((post) =>
      post.categories.includes("Web Development")
    ).length;
    const design = mockBlogPosts.filter((post) =>
      post.categories.includes("Design")
    ).length;
    const technology = mockBlogPosts.filter((post) =>
      post.categories.includes("Technology")
    ).length;
    const tutorials = mockBlogPosts.filter((post) =>
      post.categories.includes("Tutorials")
    ).length;

    setCounts({
      total,
      programming,
      webDev,
      design,
      technology,
      tutorials,
    });

    // Animate the counters
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setAnimatedCounts({
        total: Math.ceil(total * progress),
        programming: Math.ceil(programming * progress),
        webDev: Math.ceil(webDev * progress),
        design: Math.ceil(design * progress),
        technology: Math.ceil(technology * progress),
        tutorials: Math.ceil(tutorials * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        {showTitle && (
          <h2 className="card-title h4 mb-4">
            <i className="bi bi-bar-chart-fill text-primary me-2"></i>
            Blog Statistics
          </h2>
        )}

        <div className="row row-cols-2 row-cols-md-3 g-4">
          <div className="col">
            <div className="text-center">
              <div className="display-4 fw-bold text-primary mb-0">
                {animatedCounts.total}+
              </div>
              <div className="small text-muted">Total Articles</div>
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <div className="display-4 fw-bold text-primary mb-0">
                {animatedCounts.programming}
              </div>
              <div className="small text-muted">Programming</div>
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <div className="display-4 fw-bold text-primary mb-0">
                {animatedCounts.webDev}
              </div>
              <div className="small text-muted">Web Development</div>
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <div className="display-4 fw-bold text-primary mb-0">
                {animatedCounts.design}
              </div>
              <div className="small text-muted">Design</div>
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <div className="display-4 fw-bold text-primary mb-0">
                {animatedCounts.technology}
              </div>
              <div className="small text-muted">Technology</div>
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <div className="display-4 fw-bold text-primary mb-0">
                {animatedCounts.tutorials}
              </div>
              <div className="small text-muted">Tutorials</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
