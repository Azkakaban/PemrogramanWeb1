import { Link, useLocation } from "react-router";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>🎓 Student Manager</h2>
        </div>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
            Student List
          </Link>
          <Link to="/add-student" className={`nav-link ${location.pathname === "/add-student" ? "active" : ""}`}>
            Add Student
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
