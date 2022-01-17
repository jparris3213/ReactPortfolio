import React from "react";

const Nav = () => {
  return (
    <header>
      <div className="px-3 py-2 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <h1
              href="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              Jacob Parris
            </h1>
            <p className="d-flex align-items-left my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
              Development, Media, and Design
            </p>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <button href="/" className="nav-link text-secondary bg-dark border-bottom border-white  text-white">
                  Home
                </button>
              </li>
              <li>
                <button href="#" className="nav-link text-dark">
                  Apps
                </button>
              </li>
              <li>
                <button href="#" className="nav-link text-dark">
                  Media
                </button>
              </li>
              <li>
                <button href="#" className="nav-link text-grey">
                  Contact
                </button>
              </li>
              <li>
                <button href="#" className="nav-link text-dark">
                  Placehold
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Nav;
