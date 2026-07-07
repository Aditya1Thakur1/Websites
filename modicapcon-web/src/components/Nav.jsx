import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/modicapcon-logo.jpeg";
import searchIcon from "../assets/images/search.png";

export default function NavBar() {

  const [scrolled, setScrolled] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-xl navbar-light nav-2 fixed-top ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container align-items-center">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <div className="d-flex align-items-center ms-auto gap-2 order-xl-3">
          <button
            className="btn nav-btn"
            type="button"
            onClick={() => setOpenSearch((isOpen) => !isOpen)}
            aria-label={openSearch ? "Close search" : "Open search"}
          >
            {openSearch ? "x" : <img src={searchIcon} alt="" />}
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarLight"
            aria-controls="navbarLight"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

    <div className="collapse navbar-collapse order-xl-2" id="navbarLight">
            <div className="w-100 d-flex align-items-center">
            {!openSearch && (
              <ul className="navbar-nav ms-xl-auto me-xl-3 me-auto gap-md-3 gap-0 nav-mobile-card">
                  <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/service">
                    Industrial Land
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news-event">
                    Contact Us
                  </Link>
                </li>
              </ul>
            )}

            {openSearch && (
              <div className="nav-search-desktop ms-xl-auto me-xl-3 me-auto">
                <input
                  type="text"
                  className="form-control nav-search-input"
                  placeholder="Search here..."
                  autoFocus
                />
              </div>
            )}
          </div>
        </div>

        {openSearch && (
          <div className="nav-search-mobile w-100 mt-2 d-xl-none">
            <input
              type="text"
              className="form-control"
              placeholder="Search here..."
              autoFocus
            />
          </div>
        )}
      </div>
    </nav>
  );
}
