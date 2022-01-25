//import React from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Navigate, useParams } from "react-router-dom";

const Nav = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <header>
      <div className="px-3 py-2 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <p className="d-flex align-items-left my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            {!data ? "🔴" : data}Jacob Parris - Developer 
            </p>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <button>
                  <Link
                    className="nav-link text-grey"
                    activeclassname="is-active"
                    to="/"
                  >
                    Home
                  </Link>
                </button>
              </li>
              <li>
                <button>
                  <Link
                    className="nav-link text-grey"
                    activeclassname="is-active"
                    to="/development"
                  >
                    Apps
                  </Link>
                </button>

              </li>
              <li>
                <button>
                  <Link
                    className="nav-link text-grey"
                    activeclassname="is-active"
                    to="/media"
                  >
                    Media
                  </Link>
                </button>
              </li>
              <li>
                  <Link
                    className="nav-link text-grey"
                    role="button"
                    activeclassname="is-active"
                    to="/contact"
                  >Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
