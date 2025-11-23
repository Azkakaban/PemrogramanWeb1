import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: 15, background: "white", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <Link to="/" style={{ textDecoration: "none", fontWeight: "bold", fontSize: 20 }}>
        Book Manager
      </Link>
    </nav>
  );
}

export default Navbar;
