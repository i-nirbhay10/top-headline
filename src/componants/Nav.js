// import News from "./News";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const tap = () => {
    console.log("clicked");
  };

  let { title } = props;

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <div className=""></div>
          <Link
            className="navbar-brand text-light taxt-capitalize"
            to="/"
            onClick={tap}
          >
            <img
              src="logo192.png"
              alt="......"
              className="me-2 "
              style={{ height: "40px" }}
            />
            {title}
          </Link>
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
          <div className="collapse  navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                  onClick={tap}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/business"
                  onClick={tap}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/entertainment"
                  onClick={tap}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/health"
                  onClick={tap}
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/science"
                  onClick={tap}
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/technology"
                  onClick={tap}
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/sports"
                  onClick={tap}
                >
                  Sports
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <News country={"in"} catagry={"health"} /> */}
    </>
  );
};
export default Nav;

// business
// entertainment
// health
// science
// technology
// sports
