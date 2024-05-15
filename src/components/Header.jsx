import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../icons/MenuIcon";
import { useState } from "react";

const Header = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div class="container d-flex flex-row my-4 gap-5 ">
      <Link to={"/"}>
        <img
          src="https://themes.estudiopatagon.com/wordpress/zento/wp-content/uploads/2024/03/logo-zento-1.png"
          className={`img-fluid ${hovered ? "m-1" : ""}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          alt="Zento"
        />
      </Link>

      <div className="container d-flex justify-content-center align-items-center  ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex gap-3 ">
              <li className="nav-item">
                {" "}
                <Link className=" nav-link d-flex align-items-center flex-direction ">
                  <MenuIcon />
                  Tüm Kategoriler
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <button
        className="btn btn-primary"
        style={{ height: "42px", width: "155px" }}
        type="button"
      >
        Subscribe
      </button>
    </div>
  );
};

export default Header;
