import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [name, setName] = useState(localStorage.getItem("name"));
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const updateNavbar = () => {
      setName(localStorage.getItem("name"));
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", updateNavbar);
    updateNavbar();

    return () => window.removeEventListener("storage", updateNavbar);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setToken(null);
    setName(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Primetrade.ai</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {token && (
              <>
                <li className="nav-item">
                  <span className="nav-link text-info fw-bold">
                    Hello, {name}
                  </span>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>

                <li className="nav-item">
                  <button className="btn btn-outline-light ms-2" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
