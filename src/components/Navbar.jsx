import React from "react";
import logo from "../assets/logo1.svg";

function Navbar({ setCategory }) {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="container-fluid">
        {/* Logo + Brand */}
        <a
          className="navbar-brand d-flex align-items-center gap-2 text-white fw-bold"
          href="#"
          style={{ fontSize: "1.5rem", letterSpacing: "1px" }}
        >
          <span className="  d-sm-inline">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "42px", width: "40px" }}
            />
            THE HEADLINE HUB
          </span>
        </a>

        {/* Custom Icon Toggler */}
        <button
          className="navbar-toggler p-0 bg-transparent border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ outline: "none" }}
        >
          <i
            className="fas fa-bars-staggered text-white fs-2"
            style={{
              transition: "transform 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#e0e0e0";
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "scale(1)";
            }}
          ></i>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {[
              "Technology",
              "Business",
              "Health",
              "Sports",
              "Entertainment",
            ].map((category) => (
              <li className="nav-item" key={category}>
                <div
                  className="nav-link text-white"
                  style={{
                    cursor: "pointer",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    transition: "background 0.3s",
                  }}
                  onClick={() => setCategory(category)}
                  onMouseEnter={(e) =>
                    (e.target.style.background = "rgba(255, 255, 255, 0.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.background = "transparent")
                  }
                >
                  {category}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
