import Home from "./pages/home.jsx";
                       
export default function App() {
  return (
    <>
      <nav classNameName="navbar navbar-expand-xl navbar-light shadow">
        <div classNameName="container">
          <Link classNameName="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Site logo" classNameName="img-fluid" />
          </Link>
          <button
            classNameName="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarLight"
            aria-controls="navbarLight"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classNameName="navbar-toggler-icon"></span>
          </button>
          <div classNameName="collapse navbar-collapse" id="navbarLight">
            <ul classNameName="navbar-nav mx-auto gap-md-5 gap-3 gap-lx-5 mb-2 mb-xl-0">
              <li classNameName="nav-item">
                <Link classNameName="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li classNameName="nav-item">
                <Link classNameName="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li classNameName="nav-item">
                <Link classNameName="nav-link" to="/service">
                  Service
                </Link>
              </li>
              <li classNameName="nav-item">
                <Link classNameName="nav-link" to="/news-event">
                  News & Event
                </Link>
              </li>
              <li classNameName="nav-item">
                <Link classNameName="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <form classNameName="d-flex my-3">
              <input
                classNameName="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button classNameName="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}